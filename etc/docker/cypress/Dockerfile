FROM node:18-bullseye-slim

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get install -y -qq libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev \
    libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb procps

WORKDIR /app
COPY cypress.config.ts postcss.config.js tailwind.config.js package.json tsconfig.json yarn.lock ./
RUN yarn
RUN yarn cypress install
RUN yarn next telemetry disable

COPY ./etc/docker/cypress/entrypoint.sh ./
RUN chmod u+x entrypoint.sh

ENTRYPOINT [ "/app/entrypoint.sh" ]