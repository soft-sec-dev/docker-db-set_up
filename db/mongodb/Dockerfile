FROM node:18-alpine
WORKDIR /mongodb
COPY . .
RUN npm install
RUN npx tsc --init
CMD npm run dev