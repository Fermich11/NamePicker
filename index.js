const express = require('express');
const fs = require('fs');
const favicon = require('serve-favicon');
const app = express();

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/src/name-picker/name-picker.html', 'utf8', (err, html) => {
        res.set('Content-Type', 'text/html')
        res.send(html)
    });
});


app.get('/src/*/', function (req, res) {
    fs.readFile(`.${req.path}`, (err, file) => {
        if (err) {
            console.log(err)
        }

        try {
            res.send(file)
        } catch (e) {
            res.status(e.status).end()
        }
    })
})

app.use(favicon(__dirname + '/src/img/favicon.png'))

app.listen(process.env.PORT || 3000);