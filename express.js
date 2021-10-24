// clase 19 y 20 mezclado

const express = require('express');

const mysql = require('mysql2'); //CLASE 20 AGRERGA MYSQL

const app = express();

const mysqlConfig = require('./config/config');

//ESTE ES UN ARRAY 

const gente = [
    'Berni',
    'Nico',
    'Dani',
    'Vane',
];

//clase 20

const connection = mysql.createConnection(mysqlConfig);


connection.connect((error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('conectado a la base de datos')
});


// "GET" ESTO ES PARA ESCUCHAR LAS PETICIONES QUE SE PONEN EN EL NAVEGADOR (GET se utiliza para OBTENER peticiones del navegador)

/* app.get('/', function (req, res) {
    res.send('HOLA MUNDO CON EXPRESS')
}); */

/* app.get('/contacto', function (req, res) {
    res.send('CONTACTO')
}); */

// 02:12:55 AHORA LE VAMOS A DAR FUNCIONALIDAD A CADA UNO DE LOS VERBOS. VAMOS A CREAR UN ARRAY DE GENTE
//// 02:24:00 aplica JSON

app.get('/', function (req, res) {
    const filtroNombre = req.query.nombre;
    console.log (filtroNombre);

    const genteFiltrada = gente.filter (g => {
        return g === filtroNombre;
    });

    res.json(genteFiltrada);
});
/*     //AHORA VAMOS A DEVOLVER ESTO COMO SI FUERA UNA APIREST, UTILIZANDO JSON, CON UN OBJETO ESPECIAL DE JAVASCRIP QUE YA TRAE INTEGRADO que convierte cualquier variable o dato de JS a JSON
    const variableJson = JSON.stringify(gente);
    console.log(variableJson);
    // Y AHORA TAMBIEN LO HACEMOS AL REVES, ES DECIR TRAEMOS ALGO EN JSON Y LO CONVERTIMOS A JAVASCRIPT
    const objetoJavaScript = JSON.parse(variableJson);
    console.log(objetoJavaScript); 
    res.send(variableJson);
    */
    
    //hay un metodo que resume todo lo anterior de forma mas corta y simple




app.post('/', function (req, res){
    res.send('ESTE ES POR POST');
});

app.put('/', function (req, res){
    res.send('ESTE ES POR PUT');
});

app.delete('/', function (req, res){
    res.send('ESTE ES POR DELETE');
});



app.listen(4000, () =>{
    console.log('APLICACION DE EXPRESS INICIADA EXITOSAMENTE')
});


