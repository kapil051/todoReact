
  export function AllTodo({todos}){
    
        return (
               <div>
                     {todos.map((todo)=>{
                          return (
                                <>
                                     <h2>{todo.title}</h2>
                                     <h3>{todo.description}</h3>
                                     <h3>{todo.completed==false? "false":"true" }</h3>
                                </>
                          )
                     })}          
               </div>
        )

  }