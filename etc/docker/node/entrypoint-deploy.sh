#!/bin/sh

cd /app
yarn
yarn next telemetry disable
yarn add -D vercel@latest
mkdir .vercel
echo "{\"projectId\":\"${VERCEL_PROJECT_ID}\",\"orgId\":\"${VERCEL_ORG_ID}\"}" > .vercel/project.json
yarn vercel pull --yes --environment=preview --token=${VERCEL_TOKEN}
yarn vercel build --token=${VERCEL_TOKEN}

yarn vercel --prod --token=${VERCEL_TOKEN}