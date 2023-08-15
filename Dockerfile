FROM node:14

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/sanmarg/healthTracker /app/

WORKDIR /app/healthTracker

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
