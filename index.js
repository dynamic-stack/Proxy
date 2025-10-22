const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  console.log('Jugador conectado');
  ws.on('message', message => {
    console.log('Mensaje recibido:', message);
  });
});

server.listen(process.env.PORT || 5000, () => {
  console.log('Servidor de Eaglercraft activo');
});

app.get('/', (req, res) => {
  res.send('Servidor de Eaglercraft activo');
});
