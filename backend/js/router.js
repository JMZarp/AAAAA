const express = require('express');
const router = express.Router();
const connection = require('../database/db');


router.get('/', (req, res)=>{

    
    connection.query('SELECT * FROM roles', (error, results)=>{
       if(error){
        throw error;
       }else{
        res.render('index.ejs', {results:results});
       }
    })
})


//ruta para crear registros
router.get('/create', (req, res)=>{
    res.render('create.ejs');
})

//ruta para editar registros
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    connection.query('SELECT * FROM roles WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
           }else{
            res.render('edit.ejs', {user:results[0]});
           }
    })
})

const crud = require('../controllers/crud')

router.post('/save', crud.save)

module.exports = router;