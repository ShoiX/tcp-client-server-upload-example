const fs = require('fs')
var net = require('net');

const port = 1338

var server = net.createServer(function(socket) {
    
    console.log('A client was connected to port ' + port)

    // create writable stream
    const writable = fs.createWriteStream('./out.txt')
    writable.on('finish', () => {
        console.log('Upload finished')
    })

    socket.pipe(writable)
    
});

server.listen(port);