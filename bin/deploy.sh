#!/bin/bash
BIN_DIR=$(dirname "${BASH_SOURCE[0]}")

$BIN_DIR/documentation.js readme
npm run push:release