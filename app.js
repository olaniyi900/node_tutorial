const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>I am coming</h1>')
    res.end();
})

server.listen(3000)
