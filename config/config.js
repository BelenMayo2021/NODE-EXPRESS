//ACA VAMOS A PONER TODA LA INFORMACION DE LAS CREDENCIALES PARA CONFIGURAR LA CONEXION A LA BASE DE DATOS, PARA NO TENERLO CON EL RESTO DEL CODIGO. PARA QUE QUEDE MAS LIMPIO.

//TRAIGO EL OBJETO DE LA CONECCION A BASTE DE DATOS (desde app.js).. Y LO PONEMOS DENTRO DE UNA CONSTANTE

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Gralpaz2077',
    database: 'utn',
};

module.exports = mysqlConfig;


