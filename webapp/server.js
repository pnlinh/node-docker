const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`<h1>Hello NodeJs</h1>
                <br>
                <img style="width: 100px; height: 100px" src="docker.png" alt="Docker">`);
});

app.listen(PORT, HOST);

console.log(`Server is running at http://${HOST}:${PORT}`);
