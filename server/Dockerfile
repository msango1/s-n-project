FROM node:16

LABEL version="1.0"
LABEL description="Docker image for Server"
LABEL maintainer = ["msangobiyi@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]