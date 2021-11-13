---

title: Elixir cache busting in GitHub actions

tags:
  - elixir
  - github

---

Most blogs will show a simple Elixir GitHub action workflow with these cache busting settings:

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v2

  - name: Install (Elixir)
    uses: erlef/setup-beam@v1
    with:
      otp-version: 24
      elixir-version: 1.12

  - name: Cache
    uses: actions/cache@v2
    id: cache
    with:
      key: elixir-1.12-${{ hashFiles('mix.lock') }}
      restore-keys: |
        elixir-1.12-
      path: |
        _build
        deps
        priv/plts

  - name: Install (Mix)
    if: steps.cache.outputs.cache-hit != 'true'
    run: mix deps.get

  - name: Dialyzer
    run: mix dialyzer
```

However, the Elixir version might change from `1.12.1` to `1.12.2` out from under you. This can cause Dialyzer errors like so:

```text
:dialyzer.run error: Old PLT file /home/runner/work/test-app/priv/plts/dialyzer.plt
```

To solve it, use the output of the `setup` action for the cache keys like so:

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v2

  - name: Install (Elixir)
    uses: erlef/setup-beam@v1
    with:
      otp-version: 24
      elixir-version: 1.12

  - name: Cache
    uses: actions/cache@v2
    id: cache
    with:
      key: elixir-${{ steps.beam.outputs.elixir-version }}-${{ steps.beam.outputs.otp-version }}-${{ hashFiles('mix.lock') }}
      restore-keys: |
        elixir-${{ steps.beam.outputs.elixir-version }}-${{ steps.beam.outputs.otp-version }}-
      path: |
        _build
        deps
        priv/plts

  - name: Install (Mix)
    if: steps.cache.outputs.cache-hit != 'true'
    run: mix deps.get

  - name: Dialyzer
    run: mix dialyzer
```

While this is more verbose, it ensures that the cache doesn't cause issues with Dialyzer and Elixir versions changing out from under you.
