const categoriaModel=require('../models/categoriaScheme')

const categoriasListar=async (req,resp)=>{

/* let listado={
    "1":"futbol",
    "2":"baloncesto",
    "3":"tennis"
    }
  return listado */

    try{
       const categorias = await categoriaModel.find()
       resp.status(200).send(categorias)
    }catch(err){
        if(err){

            console.log("Error categoriaListar"+err)
            res.estatus(400).send("Error categoriaListar")
        }
    }


}
// Notie se crea para exportar un objeto con los metoos y demas a exporta

const categoriaGuardar = async (req,resp)=>{
   
    console.log(req.body)
    const nombre=req.body.nombre
    let mensaje = {}
    if (nombre==""){

        mensaje={ "msg":"Nombre categoria NO válido "}
        resp.status(400).json(mensaje)
    }else {
           try{
            const categoria= new categoriaModel(req.body)
            categoria.save()
            mensaje={"msg":"Catergoria almacenada con Exito"}        
            resp.status(200).json(mensaje)
 
           }catch(error){

             console.log('error categoria model....'+ error)
           }


           }

}

const categoriaObtner = async (req,resp)=>{

    const id = req.params.id
    console.log(" id solicitado "+id)
    let categoria
    if(id==1){
       categoria={ "1":"Fútbol"}
    }
    if(id==2){ categoria={"2":"tenis"}}
    resp.status(200).json(categoria)



}

const categoriaActualizar = async (req,resp)=>
{   console.log("put: ")
    const {id,nombre}=req.body
    console.log(req.body)
    try {

        if(id==''){
        resp.status(400).send("error actualizando categoria")

        }
        if(nombre !=''){
            const categoria={}
            categoria.nombre=nombre
            const rta=await categoriaModel.updateOne(
                 
                 {_id:id},
                 {$set:categoria},
                 {new:true} 

                
            )
         console.log("categoria actualizada")
         resp.status(200).send("categoria actualizada con exito!!")

        }else {

            resp.status(400).json("categoria NI váñida ")
        }

    }catch (error){
      console.log("error !! :" + error)
      resp.status(400).send("Actualizando la categoria")
    }


}

const categoriaEliminar=async (req,resp)=>{
   console.log("del "+req.params.id)
   try{

    id=req.params.id
     if(id==0){
                resp.status(400).send("Error !!!!!!! elimienado categoria")
              }
       const rta=await categoriaModel.deleteOne({_id:id})       
       console.log("categoria eliminada ")
       resp.status(200).send("categoria eliminada con Exito")

   }catch (error){
       console.log("Error: "+ error)
       resp.status(400).send("error elimnando categorias")
   }

}

module.exports={
categoriasListar,
categoriaGuardar,
categoriaObtner,
categoriaActualizar,
categoriaEliminar
}
