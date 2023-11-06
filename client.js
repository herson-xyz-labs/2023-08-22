const osc = require('node-osc');

// Define the port and host for the OSC client to send messages to
const PORT = 3333;
const HOST = '127.0.0.1';

// Create an OSC client instance
const oscClient = new osc.Client(HOST, PORT);

// Send an OSC MESSAGE to the server
const address = '/test'; // OSC address pattern
const args = [123, 'hello', 456.78]; // Arguments to send with the message
oscClient.send(address, ...args, () => {
    console.log(`Sent OSC message to ${HOST}:${PORT} with address ${address} and arguments ${args}`)
});