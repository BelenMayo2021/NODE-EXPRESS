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

//ESTO ES UN EDNPOINT
app.get ('/api/health', function (req, res){
    res.json({message: "App de login corriendo adecuadamente"});
});

app.post('/api/users', (rec, res) =>{
    res.json({message:'éste es el endpoint de crear usuario'})
})




app.listen(5000, () =>{
    console.log('El servidor ya arranco');
});












