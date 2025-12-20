---
title: Elixir reusable Github action (2025)
description: My 2025 reusable Github action I use for Elixir projects
createdAt: 2025-12-20T08:00:00.730Z
tags:
  - elixir
  - github
  - action
  - reusable
---

I realized I haven't written a new post in a while, so I wanted to share a small but useful piece of infrastructure I lean on a lot: the reusable GitHub Action I use for my Elixir projects. This is also the foundation of the CI/CD pipeline we use at [Hiive](https://hiive.com).

## TL;DR

```yaml [build-elixir-app.yaml]
name: Build Elixir App

branding:
  color: purple
  icon: code

description: >-
  GitHub Composite Action for installing Elixir & Beam, setting up and
  retrieving dependencies along with caching.

inputs:
  cache-name:
    default: ${{ github.job }}
    description: >-
      (Optional) The name of the cache. This is used to build the full cache
      key. By default this uses the job name which should suffice is most
      scenarios. If you have a custom naming scheme or want to share caches
      between different actions you can set it here. The reason we set this
      differently for each job is because tools will have different compile
      settings, like credo and dialyzer, and therefor have different files
      cached.
    required: false
  compile-dependencies:
    default: "true"
    description: >-
      (Optional) Whether to compile the dependencies. If this is set to "false",
      the action will skip running the `mix deps.compile` command.
    required: false
  compile-elixir:
    default: "true"
    description: >-
      (Optional) Whether to compile the Elixir app. If this is set to "false",
      the action will skip running the `mix compile` command.
    required: false
  elixir-version:
    description: >-
      (Optional) Version range or exact version of Elixir to use. If this is
      not set, we attempt to read the "elixir" field from the .tool-versions
      file.
    required: false
  oban-key-fingerprint:
    description: >-
      (Optional) Public key for fetching the oban pro repository data.
    required: false
  oban-license-key:
    description: >-
      (Optional) Oban pro license key.
    required: false
  otp-version:
    description: >-
      (Optional) Version range or exact version of Erlang/OTP to use. If this
      is not set, we attempt to read the "erlang" field from the .tool-versions
      file.
    required: false
  setup-elixir:
    default: "true"
    description: >-
      (Optional) Whether to install Elixir and Erlang. If this is set to "false",
      the action will skip running the `erlef/setup-beam` action.
    required: false
  working-directory:
    default: "."
    description: >-
      (Optional) The working directory where the Elixir app is located. If this
      is not set, the action will use the github workspace.
    required: true

outputs:
  build-cache-hit:
    description: >-
      A boolean value to indicate an exact match was found for the
      build file cache.
    value: ${{ steps.build-cache.outputs.cache-hit }}
  dependencies-cache-hit:
    description: >-
      A boolean value to indicate an exact match was found for the
      dependency cache.
    value: ${{ steps.dependencies-cache.outputs.cache-hit }}
  elixir-version:
    description: >-
      The exact version of Elixir installed.
    value: ${{ steps.beam.outputs.elixir-version }}
  otp-version:
    description: >-
      The exact version of Erlang/OTP installed.
    value: ${{ steps.beam.outputs.otp-version }}

runs:
  using: composite

  steps:
    - id: beam
      if: inputs.setup-elixir == 'true'
      name: Install Elixir
      uses: erlef/setup-beam@v1
      with:
        otp-version: ${{ inputs.otp-version }}
        elixir-version: ${{ inputs.elixir-version }}
        install-hex: true
        install-rebar: true
        version-file: ${{ !inputs.elixir-version && format('{0}{1}', inputs.working-directory, '/.tool-versions') || null }}
        version-type: strict
      env:
        HEXPM_MIRRORS: https://repo.hex.pm,https://cdn.jsdelivr.net/hex
        HEXPM_TIMEOUT: 60000

    - id: dependencies-cache
      name: Cache Dependencies
      uses: actions/cache@v4
      with:
        key: ${{ runner.os }}-${{ steps.beam.outputs.otp-version }}-${{ steps.beam.outputs.elixir-version }}-mix-${{ inputs.cache-name }}-${{ hashFiles(format('{0}{1}', inputs.working-directory, '/mix.lock')) }}
        restore-keys: |
          ${{ runner.os }}-${{ steps.beam.outputs.otp-version }}-${{ steps.beam.outputs.elixir-version }}-mix-${{ inputs.cache-name }}-
          ${{ runner.os }}-${{ steps.beam.outputs.otp-version }}-${{ steps.beam.outputs.elixir-version }}-mix-
        path: |
          ~/.mix/archives
          ${{ format('{0}{1}', inputs.working-directory, '/deps') }}

    - id: build-cache
      name: Cache Builds
      uses: actions/cache@v4
      with:
        key: ${{ runner.os }}-${{ steps.beam.outputs.otp-version }}-${{ steps.beam.outputs.elixir-version }}-build-${{ inputs.cache-name }}-${{ hashFiles(format('{0}{1}', inputs.working-directory, '/mix.lock')) }}
        restore-keys: |
          ${{ runner.os }}-${{ steps.beam.outputs.otp-version }}-${{ steps.beam.outputs.elixir-version }}-build-${{ inputs.cache-name }}-
          ${{ runner.os }}-${{ steps.beam.outputs.otp-version }}-${{ steps.beam.outputs.elixir-version }}-build-
        path: |
          ${{ format('{0}{1}', inputs.working-directory, '/_build') }}

    - if: inputs.oban-key-fingerprint && inputs.oban-license-key
      name: Setup Oban Repository
      run: |
        mix hex.repo add oban "https://repo.oban.pro" \
          --fetch-public-key "${{ inputs.oban-key-fingerprint }}" \
          --auth-key "${{ inputs.oban-license-key }}"
      shell: bash
      working-directory: ${{ inputs.working-directory }}

    - if: steps.dependencies-cache.outputs.cache-hit != 'true'
      name: Install Tooling
      run: |
        mix local.rebar --force
        mix local.hex --force
      shell: bash
      working-directory: ${{ inputs.working-directory }}

    - if: github.run_attempt != '1'
      name: Clean Dependencies
      run: |
        mix deps.clean --all
        mix clean
      shell: bash
      working-directory: ${{ inputs.working-directory }}

    - if: github.run_attempt != '1' || steps.dependencies-cache.outputs.cache-hit != 'true'
      name: Install Dependencies
      run: |
        mix deps.get
      shell: bash
      working-directory: ${{ inputs.working-directory }}

    - if: inputs.compile-deps == 'true'
      name: Compile Dependencies
      run: |
        mix deps.compile
      shell: bash
      working-directory: ${{ inputs.working-directory }}

    - if: inputs.compile-elixir == 'true'
      name: Compile Elixir
      run: |
        mix compile --warnings-as-errors
      shell: bash
      working-directory: ${{ inputs.working-directory }}
```

The input variables already give a decent overview of what the action does, but I’ll walk through the important bits below.

## Using the action

Using this action is intentionally simple. Most inputs can be omitted, which keeps your workflows short and focused:

```yaml [ci.yaml]
jobs:
  Build_Docs:
    name: Build (Docs)
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v5

      - name: Setup Elixir
        uses: ./.github/actions/build-elixir-app

      - name: Build Docs
        run: mix docs
```

By default, the action:

- Installs Elixir and Erlang/OTP (using either explicit versions or `.tool-versions`)
- Restores and populates dependency and build caches
- Installs Hex/Rebar
- Compiles your dependencies and app

You can selectively turn pieces off via inputs like `compile-dependencies`, `compile-elixir`, or `setup-elixir` when jobs need a lighter setup.

## Caching

The first thing you’ll probably notice is the `cache-name` input. By default, this uses the GitHub job name. That value is suffixed onto all cache keys, but the action also allows restoring from other cache names.

This gives you:

- **Per-job isolation** – different jobs (e.g. tests, lint, dialyzer) can have their own dependency and build caches, which matters when tools compile with different options.
- **Cross-job reuse** – restore keys still allow you to fall back to more general caches, reducing cold starts while keeping thrashing low. The tradeoff is higher total cache usage.

The action also exposes two helpful outputs:

- `build-cache-hit`
- `dependencies-cache-hit`

You can wire these into later steps to, for example, skip expensive work on a warm cache hit.

Finally, when a job is re-run, the action takes a "clean slate" approach: it restores the cache, explicitly cleans compiled artifacts and dependencies, and only then rebuilds and saves a fresh cache. That keeps reruns more deterministic and helps reduce flaky behavior tied to stale build artifacts.

In practice, this has made it much easier for developers to re-run failed jobs and debug them without fighting mysterious cache issues.

## Versioning

For versions, the action leans on your `.tool-versions` file whenever possible. If you’re not already using [mise](https://mise.jdx.dev/), I highly recommend it. Even without mise, keeping a `.tool-versions` file as the single source of truth for language versions is a big win.

The action will:

- Read `elixir` and `erlang` versions from `.tool-versions` if explicit inputs aren’t provided.
- Export the exact resolved `elixir-version` and `otp-version` as outputs, so downstream jobs can log or act on the precise versions in use.

That keeps GitHub Actions, local development, and other environments in sync, and avoids the usual "works on my machine" version drift or version bump PRs that touch 30 different files.
