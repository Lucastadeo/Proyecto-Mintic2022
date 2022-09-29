const express = require('express')
const { route } = require('./categoriaRoute')
const router =express.Router()


router.get('/',function(req,resp){

    resp.send("<h1> Hoy es viernes son las 3:55 pm<h1>")

})



module.exports = router