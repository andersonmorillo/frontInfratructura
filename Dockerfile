FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

### stage 2

FROM nginx:alpine

ADD ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/adminpro /var/www/app

EXPOSE 80

CMD ["nginx","-g","daemon off;"]