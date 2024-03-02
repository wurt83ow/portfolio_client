# Используем официальный образ Node.js для сборки приложения
FROM node:18 as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Собираем приложение
RUN npx webpack

# Начинаем новую стадию для Nginx
FROM nginx:alpine

# Копируем собранные файлы из предыдущей стадии
COPY --from=build /app/dist /usr/share/nginx/html

# Удаляем дефолтный Nginx конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наш конфиг
COPY default.conf /etc/nginx/conf.d/

# Открываем порт 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
