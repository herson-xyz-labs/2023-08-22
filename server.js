const osc = require('node-osc');
const WebSocket = require('ws');

// Define the OSC_PORT and OSC_HOST of the OSC server
const OSC_PORT = 3333;
const OSC_HOST = '127.0.0.1';

// Define the port for the WebSocket server
const WS_PORT = 8080;

// Create an OSC server instance
const oscServer = new osc.Server(OSC_PORT, OSC_HOST);

// Create a WebSocket server instance
const wsServer = new WebSocket.Server({ port: WS_PORT });

console.log(`OSC Server is running at ${OSC_HOST}:${OSC_PORT}`);
console.log(`WebSocket Server is running at ${WS_PORT}`);

// Handle incoming OSC messages
oscServer.on('message', (msg) => {
    console.log(`Message: ${msg}`);
    // Forward the OSC message to all connected WebSocket clients
    wsServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(msg));
        }
    });
});
