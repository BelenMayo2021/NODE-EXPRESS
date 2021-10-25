const http = require('http');

const server = http.createServer(Function (request, response){
response.writeHead (200, {'content-Type': 'text/html'});
response.write(`
<html>
    <body>
        <h1> Este es el server de Node Funcionando</h1>
    </body>
</html>
`);

response.end();

});


server.listen(4000);

console.log('SERVIDOR INICIALIZADO');
