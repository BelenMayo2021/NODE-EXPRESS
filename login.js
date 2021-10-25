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
        VALUES('${body.email}', '${body.pasword}', '${body.nombre}', '${body.edad}');`,
            (error, result) => {
                if(error){
                    console.error(error);
                    return res.json({message:'No pudimos crear un usuario'});
                }
                return res.json({message: 'El usuario a sido creado con exito'});
            }
    );
});


app.listen(5000, () =>{
    console.log('El servidor ya arranco');
});












