# cljs-mlb-notifier

FIXME: description

## Installation

You will need to install Leiningen and NodeJS.

## REPL

```
./repl.sh
```

## Configuration

You will need to set the following environment variables:

* `MLB_NOTIFIER_FROM`
* `MLB_NOTIFIER_TO`
* `MAILGUN_DOMAIN`
* `MAILGUN_API_KEY`

And if you set the debugging bit, it won't actually send the emails, but
instead will only log them:

* `MLB_NOTIFIER_DEBUG=true`

## Usage

Compile:

```
lein cljsbuild once core
```

Test:

```
lein doo node test
```

Run:

```
node resources/public/js/core.js
```
