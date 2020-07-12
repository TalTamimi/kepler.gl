
FROM node:8.13.0-alpine


RUN apk update \
	&& apk upgrade \
	&& apk add git

copy . .



RUN npm install \
	&& npm audit fix

WORKDIR /examples/demo-app

RUN npm install \
        && npm audit fix

ENV PATH "$PATH:/examples/demo-app/node_modules/.bin"

EXPOSE 80

CMD ["webpack-dev-server", "--progress", "--port", "80", "--host", "0.0.0.0"]
