var config = require('./config/config')
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var cron = require('./config/cron')
var Client = require('./config/cliente')
var clients = []

app.set('port', process.env.PORT || 3000)
app.use(express.static('public'))
app.use(express.json())
app.use('/', (req, res) => {
    res.sendFile('public')
})
io.on('connection', (socket) => {
    const client = new Client(socket)
    clients.push(client)

    if (!cron.getTask()) cron.startTask()
});

server.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto ' + app.get('port'))
})

module.exports.clients = clients
