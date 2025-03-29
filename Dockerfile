FROM node:lts-alpine AS build

WORKDIR /app

COPY ./frontend .
RUN npm install vue && npm run build

FROM nginx:stable-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]