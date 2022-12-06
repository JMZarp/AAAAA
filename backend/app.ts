const express = require('express');
const app = express();
const port = 3000;


let configuracion={
     "hostname":"127.0.0.1",
     "port":3000,
};




app.listen(configuracion, () => {
  console.log(`Conectandome al servidor ${configuracion.port}`)
})