const { json } = require('body-parser')
var express = require('express')
const db = require('./config/db')
var app = express()
const puerto= 3000




// routes
app.use(express.json())
app.use('/api/categorias',require('./routes/categoriaRoute'))
app.use('/api/ver',require('./routes/verRoute'))

// servidor
app.listen(puerto,function(){
    console.log("escuchando en puerto activo nro "+ puerto)
})

// EJECUTAR LA CONEXIÓN
db()