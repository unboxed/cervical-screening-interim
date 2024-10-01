#!/bin/bash

set -eo pipefail

npm install --no-fund --no-audit

exec "$@"
