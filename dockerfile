# Vaihe 1: frontend build
FROM node:18 as build
WORKDIR /app
COPY frontend ./frontend
RUN cd frontend && npm install && npm run build

# Vaihe 2: backend + frontendin build
FROM node:18
WORKDIR /app/backend

# Kopioi ja asenna riippuvuudet
COPY backend/package*.json ./
RUN npm install

# Kopioi backendin lähdekoodi
COPY backend ./

# Kopioi frontendin build backendin sisään (josta Express palvelee sen)
COPY --from=build /app/frontend/dist ./client

EXPOSE 8080
CMD ["node", "server.js"]