import app from './app.js'
import { connectToDB } from './db/connection.js'

connectToDB().then(()=>{
    app.listen(5000,()=>console.log("server open"))
})
.catch((err)=>{
    console.log(err)
})
