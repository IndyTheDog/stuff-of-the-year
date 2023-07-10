FROM node:18-alpine

WORKDIR /app

COPY ./etc/docker/node/entrypoint-run.sh /home/node/
COPY ./etc/docker/node/entrypoint-setup.sh /home/node/
COPY ./etc/docker/node/entrypoint-deploy.sh /home/node/
RUN chmod u+x /home/node/entrypoint-*.sh
RUN chown -Rf node:node /home/node/entrypoint-*.sh

RUN chown -Rf node:node /app

USER node

ENTRYPOINT [ "/home/node/entrypoint-run.sh" ]