FROM node:18-alpine

WORKDIR /app

COPY ./etc/docker/node/entrypoint.sh /home/node/
COPY ./etc/docker/node/entrypoint-setup.sh /home/node/
RUN chmod u+x /home/node/entrypoin*.sh
RUN chown -Rf node:node /home/node/entrypoin*.sh

RUN chown -Rf node:node /app

USER node

ENTRYPOINT [ "/home/node/entrypoint.sh" ]