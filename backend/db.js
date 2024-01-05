const mongoose=require("mongoose");

 async function connectDB(){

       try{ 
          await mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos");
            console.log("connected to the database");   
       }catch(e){
           console.error("error when connecting to remote db");
              return;
       }
       

  }  

     connectDB();


 let todoSchema=mongoose.Schema({
       title:String,
       description:String,
       completed:Boolean,
 })    

 let Todo=mongoose.model("Todo", todoSchema);


 module.exports={
      Todo,
 }