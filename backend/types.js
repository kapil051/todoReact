const zod=require("zod");


let todoBody=zod.object({
      title:zod.string(),
     description:zod.string(),
})

let updateTodo=zod.object({
       _id:zod.string(),
})

  module.exports={
       todoBody,
       updateTodo,
  }