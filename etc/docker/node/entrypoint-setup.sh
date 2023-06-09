#!/bin/sh

cd /app
mkdir -p node_modules .next
yarn
yarn next telemetry disable

echo -e '\033[0;31m******************************************************\033[0m'
echo -e '\033[0;31mOn your host, enter the following to allow Cypress GUI\033[0m'
echo -e '\033[0;33mxhost +local:*\033[0m'
echo -e '\033[0;31m******************************************************\033[0m'
