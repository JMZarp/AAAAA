const connection = require('../database/db')

exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('INSERT INTO roles SET ?',{user, rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

}

//const bodyParser = require('body-parser');

// create application/json parser
//var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

/*app.get('/Usuarios', (req, res) => {
    connection.query("SELECT * FROM usuarios", function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
    //res.send(JSON.stringify(Usuarios));
});
app.get('/Usuarios/:id', (req, res) => {
    let id = req.params.id;
    connection.query("SELECT * FROM usuarios WHERE id=?", id, function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
app.post('/CrearUsuarios', jsonParser, (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let correo = req.body.correo;
    let clave = req.body.clave;
    connection.query("INSERT INTO usuarios(nombre, apellido, correo, clave) VALUES(?,?,?,?)", [nombre, apellido, correo, clave], function (error, results, fields) {
        res.send(JSON.stringify(results.insertId));
    });
});
app.put('/Actualizar/:id', jsonParser, (req, res) => {
    let id = req.params.id;
    let usuario = req.body.usuario;
    let clave = req.body.clave;
    let correo = req.body.correo;
    console.log("Usuario " + usuario + " con la clave " + clave + " correo " + correo + " y id " + id + " han sido modificados");
    res.send("datos modificados");
});
app.delete('/Eliminar/:id', (req, res) => {
    let id = req.params.id;
    res.status(200).send("se eliminó el dato " + id);
});*/