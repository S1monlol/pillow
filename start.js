const
    path = require('path'),
    fs = require('fs'),
    https = require('http'),
    app = require('express')().use(require('express').static(path.normalize(__dirname + '/public/'), {extensions: ['html']})).use((req, res) => {
        res.status(404, res.send(fs.readFileSync(path.normalize(__dirname + '/public/404.html'), 'utf-8')))
    }),
    ssl = {
        key: fs.readFileSync(path.join(__dirname, '/corrosion/ssl.key')),
        cert: fs.readFileSync(path.join(__dirname, '/corrosion/ssl.cert')),
    },
    server = https.createServer(ssl, app);

server.listen(8080);
console.log('Server Running :D')