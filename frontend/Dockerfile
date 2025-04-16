# Stage 1: Build Angular app
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build --configuration production --project frontend

# Stage 2: Serve with Nginx
FROM nginx:alpine

# 🔥 Delete all default Nginx files (DO NOT SKIP)
RUN rm -rf /usr/share/nginx/html/*

# ✅ Copy the SSR browser build
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# ✅ Include custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
