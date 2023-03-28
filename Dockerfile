FROM node AS builder

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .

RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

FROM nginx:1.21-alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
