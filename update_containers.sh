#!/bin/bash

# Остановка и удаление контейнеров
docker-compose down

# Пересборка образов и запуск контейнеров
docker-compose up -d --build

