FROM node:lts-alpine
RUN mkdir -p /api
WORKDIR /api
ENV NODE_ENV=dev
ARG TZ='America/Mexico_City'
ENV TZ ${TZ}
COPY ./ ./
RUN apk upgrade --update \
    && apk add -U tzdata \
    && cp /usr/share/zoneinfo/${TZ} /etc/localtime \
    && rm -rf \
    /var/cache/apk/*
RUN npm install
EXPOSE 8080
RUN npm run build
RUN mkdir /logs
RUN chmod 777 -R /logs
RUN chown -R node: /logs
CMD [ "npm", "run", "serve" ]