const express = require ('express');
const mysql = require ('mysql2');
const app = express();


const mysqlConfig = require('./config/config');
const connection = mysql.createConnection(mysqlConfig);
connection.connect((error) =>{
    if (error){
        console.error(error);
        process.exit()
    }
    console.log('conectado correctamente');
})

//ESTO ES PARA HABILITAR EL req.body ---Z que ya viene por defecto en express, pero no esta habilitado.

app.use(express.json());


//ESTO ES UN EDNPOINT
app.get ('/api/health', function (req, res){
    res.json({message: "App de login corriendo adecuadamente"});
});


// segunda parte clase 20

//ESTE EDNPOINT se encarga de la creacion de usuarios

app.post('/api/users', (req, res) => {
    const body = req.body;

    connection.query(`
        INSERT INTO \`usuarios\` (\`email\`,\`pasword\`,\`nombre\`,\`edad\`)
        VALUES ('${body.email}', '${body.pasword}', '${body.nombre}', '${body.edad}');
        `,
            (error, result) => {
                if(error){
                    console.error(error);
                    return res.json({message:'No pudimos crear un usuario'});
                }
                return res.json({message: 'El usuario a sido creado con exito'})
            }
    );
});


// ENDPOINT para loguearce, devuelve un usuario
app.post('/api/login', (req, res) => {
    const body = req.body;
    console.log(body);
    connection.query(
        `SELECT id, email, nombre, edad, foto_perfil FROM usuarios 
        WHERE email = '${body.email}' AND pasword = '${body.pasword}'`,
    (error, result) => {
        if (error) {
            console.error(error);
            return res.json({ message: 'Error inesperado, nuestros mejores ingenieros estan trabajando en la solución' });
        }
        
        if (result.length > 0) {
            return res.json({ message: 'Usario logueado exitosamente', data: result[0]});
        } else {
            return res.json({ message: 'Usuario o contraseña incorrecta'});
        }
    }
    );
});






app.listen(5000, () =>{
    console.log('El servidor ya arranco');
});












