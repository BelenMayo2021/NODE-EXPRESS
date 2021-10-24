
//----------- CLASE 17 ----------------------------
//------NOS CONECTAMOS A MySQL DESDE ACA PARA DESPUES HACER CONSULTAS Y VERLAS POR LA TERMINAL DE ACA- 
// INSTALAMOS NODEMON PARA IR VIENDO EN VIVO COMO SE EJECUTA LO QUE VOY HACIENDO---------

//ESTO NOSE PORQUE QUEDO ACA
/* console.log ('Es una app con Node'); */


const mysql = require('mysql2'); // clase 17
const http = require('http'); //clase 19

//CLASE 20

const mysqlConfig = require('./config/config');
console.log(mysqlConfig);

const connection = mysql.createConnection(mysqlConfig);


connection.connect (function (error){

    if (error){
        console.log('SE PRODUJO UN ERROR EN LA CONEXION' + error.stack);
        return;
    }

    console.log('LA CONEXION CON LA BASE DE DATOS SE REALIZO CON EXITO !!');

});


//----------- ESTO ES UNA QUERY DE LA clase 17 QUE LA ACABO DE COMENTAR PARA HACER
// ALGO DE LA clase 19 ------------------


/* connection.query('select * from empleado', function (error, resultados){

    if (error) {
        console.log('HUBO UN ERROR EN LA CONEXION' + error.stack);
        return;
    }

    resultados.forEach(resultado => {
        console.log(resultado);
    });

}); */










//----------- CLASE 19 ----------------------------
//---ACTIVAMOS EL MODULO HTTP DE NODE. PARA USARLO DE SERVIDOR COMO LOCALHOST-------


//--------- AQUI LE PASAMOS UNA FUNCION QUE 
//----------RECIBE PARAMETROS: PETICION Y RESPUESTA.

const servidor=http.createServer((request, response) =>{

//------------DESPUES TRAE UNA QUERY DE LA CLASE 17 

    connection.query('select * from empleado', (error, resultados) => {

        if (error) {
            console.log('HUBO UN ERROR EN LA CONEXION' + error.stack);
            return;
        }
    
        let listaResultados='';
        resultados.forEach(resultado => {
            listaResultados +=`<div>${resultado.name}</div>`;
        });


//------------ ESTO HICIMOS PRIMERO

    response.writeHead(200,{'content-Type':'text/html'});
    response.write(`
    <html>
        <head>
            <title>
                Mi primera pagina con NODE
            </title>
        </head>
        <body>
            Hola Mundo ! desde Node.
            ${listaResultados}
        </body>
    </html>`
    );

    response.end();

});

connection.end();

});

// TODOS LOS SERVIDORES NECESITAN UN PUERTO PARA 'ESCUCHAR' 

servidor.listen(3000); //ESPECIFICAMOS EL PUERTO
console.log('Servidor web iniciado'); // SE AGREGA ESTO PARA VER QUE EL SERVIDOR ESTE INICIALIZADO

// LUEGO EJECUTO EN LA TERMINAL "NODE APP.JS"
// y abro una pagina web y pongo " http://localhost:3000/ "
// y ahi me mustra todo.





















