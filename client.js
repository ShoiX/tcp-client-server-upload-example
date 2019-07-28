var net = require('net');
const fs = require('fs')

var client = new net.Socket();
client.connect(1338, '127.0.0.1', function() {
	console.log('Connected');
    
    // create readable
    const readable = fs.createReadStream('./in.txt')
    readable.pipe(client)
    readable.on('end', () => {
        client.destroy()
    })
});

client.on('close', function() {
	console.log('Connection closed');
});