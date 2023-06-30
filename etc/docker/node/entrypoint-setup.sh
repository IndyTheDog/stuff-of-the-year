#!/bin/sh

cd /app
mkdir -p node_modules .next
yarn
yarn next telemetry disable
