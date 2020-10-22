var net = require('net');

var client = new net.Socket();
client.connect(3121, '127.0.0.1', function() {
	console.log('Connected');
    client.write('TEST');
    client.write('TEST');
    client.write('TEST');
    client.write('TEST');
});
client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('.bye', function() {
	console.log('Connection closed');
});