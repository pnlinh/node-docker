const express = require('express');
const winston = require('winston');
const http = require('http');

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: '../logs/weblog.log'})
    ]
});

const app = express();

const server = http.createServer(app);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`<h1>Hello NodeJs</h1>
                <br>
                <img style="width: 100px; height: 100px" src="docker.png" alt="Docker">`);
});

server.on('error', (error) => {
    logger.log('error', error.toString());
});

server.listen(PORT, HOST, () => {
    logger.log('info', `Server is started at ${new Date()}`);
});

console.log(`Server is running on http://${HOST}:${PORT}`);
