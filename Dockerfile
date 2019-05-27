FROM node:10.10

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /usr/src/app/
COPY .npmrc /usr/src/app/.npmrc
RUN npm install

# start app
CMD ["npm", "dev"]