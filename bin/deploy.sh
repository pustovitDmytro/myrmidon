#!/bin/bash
BIN_DIR=$(dirname "${BASH_SOURCE[0]}")
npm run save-examples
npx babel-node $BIN_DIR/documentation.js readme
npx babel-node $BIN_DIR/documentation.js reference

cat docs/reference.md | head -n 130 | tail -n 50
