# Vaihe 1: Rakenna frontend
FROM node:18 AS build

WORKDIR /app
COPY frontend ./frontend
RUN cd frontend && npm install && npm run build

# Vaihe 2: Palvele Expressillä
FROM node:18

WORKDIR /app

# Kopioi server-koodi ja rakenne
COPY backend ./backend
COPY backend/package*.json ./backend/
RUN npm install

# Kopioi rakennettu frontend Expressin näkyviin
COPY --from=build /app/backend/dist ./frontend/dist

# Aseta ympäristömuuttujat käyttöön
ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080
CMD ["node", "server/index.js"]
