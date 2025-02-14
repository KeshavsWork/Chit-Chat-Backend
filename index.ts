import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log('Received:', message.toString());
    // socket.send(message.toString());
    wss.clients.forEach(client => {
      if (client !== socket && client.readyState === 1) {
        console.log(message.toString());
        client.send(message.toString()); // Broadcast message
      }
    });
  });

  socket.on('close', () => {
    console.log('User disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8080');
