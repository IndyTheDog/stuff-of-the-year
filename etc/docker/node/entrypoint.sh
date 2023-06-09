#!/bin/sh

cd /app

yarn
yarn next telemetry disable
yarn dev