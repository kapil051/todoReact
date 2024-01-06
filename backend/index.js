const express=require("express"); 
const { todoBody, updateTodo } =require("./types");
const  { Todo }= require("./db"); 
 const cors=require("cors");


      const app=express();
        const port=3000;
      app.use(express.json());  
      app.use(cors()); 
  
  app.post("/todo",async(req,res)=>{
                let todo=req.body;
            let response=todoBody.safeParse(todo);
               if(!response.success){
                     res.json({
                       msg:"send title and description a valid string",
                     })
               }

                 try{ 

                   await Todo.create({
                        title:todo.title,
                          description:todo.description,
                           completed:todo.completed,
                   })
                   
                   res.json({
                        msg:"todo saved successfully", 
                   })

                 }catch(e){
                      res.json({
                        msg:"databse is down try after some time",
                      });
                 }

    })       

     app.get('/todos',async(req,res)=>{ 
      
        try{

              let allTodos=await Todo.find({});
                 res.json({
                    allTodos,
                 })
        }catch(e){
               res.json({
                "msg":"error in fetching all todos from the db",
               })
        }
  
     })

       app.put("/updateTodo",async(req,res)=>{
 
                        let userData=req.body;
                 let responce= updateTodo.safeParse(userData);

                    if(!responce.success){
                          res.status(411).json({
                              "msg":"provide a valid id",
                          })
                    }

                       try{

                        
                       await  Todo.updateOne({
                       _id: userData._id,
                         },{
                        completed:true,
                         })  
                         
                            res.json({
                              "msg":"updated successfully",
                            })

                       }catch(e){
                           console.error(e);
                        res.json({
                          "msg":"not updated successfully",
                        })

                       }

               
       })

  

  app.use((err,req,res,next)=>{
        res.status(404).json({"msg":"invalid input from last handler"});
           next();
  })

app.listen(port,()=>{
      console.log(`app listening on the port ${port}`);
}) 














