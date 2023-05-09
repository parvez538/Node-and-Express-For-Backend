import  express  from "express";

const app=express();

app.get("/",(req,resp)=>{

    resp.json({
        succses : true,
        info:{
            name:"Aafrin",
            sirname:"Mullani"
        },
        product:["fridge","Washing"]
       
    });
    // console.log("served");

});

app.listen(5000,()=>{
    console.log("Server Start");
})