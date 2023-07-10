#!/bin/sh

cd /app
yarn

echo "Running test: $TEST_TYPE"

yarn $TEST_TYPE
