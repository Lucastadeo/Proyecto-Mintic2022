const express = require('express')
const router =express.Router()
const categoriaCtrl = require('../controllers/categoriasCtrl')

router.get('/',categoriaCtrl.categoriasListar)


router.get('/:id',categoriaCtrl.categoriaObtner)
router.post('/',categoriaCtrl.categoriaGuardar)
router.put('/',categoriaCtrl.categoriaActualizar)
router.delete('/:id',categoriaCtrl.categoriaEliminar)
module.exports = router