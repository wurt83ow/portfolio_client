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

# Используем официальный образ nginx для раздачи статических файлов
FROM nginx:stable-alpine

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Копируем собранные файлы приложения из контейнера сборки в контейнер nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]

# Указываем монтирование тома
VOLUME /app
