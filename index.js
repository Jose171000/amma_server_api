import express  from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("Amo a Mariana Luz. Te amo, amor")
})

app.listen(3000, ()=>{
    console.log("Servidor escuchando el puerto 3000");
    
})