#!/bin/bash
BIN_DIR=$(dirname "${BASH_SOURCE[0]}")
npm run save-examples
npm run documentate
npm run semantic-release