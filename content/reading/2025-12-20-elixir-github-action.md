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

I realized I haven't made a new post in forever, so I figured I'd leave a little tidbit to keep things rolling. This is the reusable Github action I use for my Elixir projects, as well as what I've incorporated into the CI/CD pipeline at [Hiive](https://hiive.com).

## TL;DR:

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

I think the input variables give a pretty good idea of what's going on here, but I'll break it down in some more detail below.

## Using

Using this action is pretty simple. Most of the inputs can be left off, leaving your workflows pretty small:

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

## Caching

One of the first things you'll notice is the `cache-name`. By default, this takes the Github job name. When you use this action, all of the caches will have this name suffixed to the end, but also allow restoring from any other cache name. This allows you to have unique dependencies or built files per job, all still cached and with little thrashing but at the expense of more cache space being used.

Secondly, we have a `build-cache-hit` and `dependencies-cache-hit` output for later use.

And lastly, in the case of the job ever being re-ran, we retrieve the cache, then delete the cached files, and force a clean slate. This means after the job is done, it will save the whole cache a-new.

I've found this extremely helpful for developers to reduce flakes, or at least make it easier for them to rerun and fix it themselves.

## Versioning

This action pulls as much version data as it can from the `.tool-versions` file. If you are not using [mise](https://mise.jdx.dev/) already, I'd highly recommend you should. Otherwise, using a `.tool-versions` file to manage all of your language versions is a huge win.
