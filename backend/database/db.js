const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3310,
    database: 'educacine'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error de conexión ' + err.stack);
        return;
    }
    console.log('Conexión establecida a la BD ' + connection.threadId);
});

module.exports = connection;