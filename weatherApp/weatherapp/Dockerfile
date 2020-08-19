# FROM node:alpine
# WORKDIR /app

# COPY package.json .
# RUN npm install 
# COPY . .
# CMD ["npm","start"]
FROM nginx:alpine
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
