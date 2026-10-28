# Базовий образ Node.js на базі Alpine Linux
FROM node:20-alpine

# Метадані про автора та версію
LABEL maintainer="Olesya Pavlovska" version="1.0"

# Робоча директорія у контейнері
WORKDIR /app

# Копіювання маніфестів залежностей
COPY package*.json ./

# Встановлення продакшн-залежностей
RUN npm ci --omit=dev

# Копіювання решти коду проєкту
COPY . .

# Змінні середовища та порт
ENV PORT=3000
EXPOSE 3000

# Команда для запуску сервера
CMD ["node", "server.js"]