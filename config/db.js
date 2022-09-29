const monggose= require('mongoose')
const DBURI = 'mongodb://localhost:27017/marcadores'

module.exports= ()=>{
 
 const conn=()=>{

   monggose.connect(
     DBURI,
     {

      keepAlive:true,
      useNewUrlParser:true,
      useUnifiedTopology:true
     },
     (err)=>{
        if(err){
            console.log('Error de conexión '+err)
        }else{
            console.log('Comexión Satisfactoria!!!')
        }

     }
   )

 }

 // usar la conexión ya programada
 conn()
}  