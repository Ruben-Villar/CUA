const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Requiriendo la conexión a BD gestor (MySQL)

const mysql = require('mysql2');

const conecction = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fatima',
    port: '3306',
})

conecction.connect((err)=>{
    if(!err) {
        console.log('Conexion exitosa');
    }else{
        console.log('Conexion fallida');
    }
})


//Creando una nueva aplicación Express.
const app = express();
const path = require("path");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "public")));
app.use('/public/css', express.static('public/css'));
app.use('/public/js', express.static('public/js'));
app.use('/public/img', express.static('public/img'));
app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "./public/index.html");
    res.sendFile(filePath);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
          console.log('El servidor esta en el puerto ' + PORT);
});


app.post("/valida", function (req, res) {
    const datos = req.body;  
    let nombres = datos.nom;  
    let email = datos.co;
    let mensaje = datos.men;
   
    let registrar = "INSERT INTO contacto (nombre,email,mensaje) VALUES ('" + nombres + "','" + email + "','" + mensaje + "')";

    conecction.query(registrar, function (error) {
        if (error) {
            throw error
            
        } else {
            console.log("Datos recibidos")
            console.log(Object.entries(datos));
            res.redirect(req.get('referer'));
            console.log(error);
        }
    }); 
});