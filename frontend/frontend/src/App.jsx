import { useState } from 'react'
import { Inputtodod } from './components/Inputtodo'
import { AllTodo } from './components/Alltodo'

function App() {
  const [todos, setTodos] = useState([]);

    

     fetch("http://localhost:3000/todos")
     .then( async (res)=>{
           const data= await res.json();
              setTodos(data.allTodos);
     })
    
  return (
    <>
       <Inputtodod></Inputtodod>
      <AllTodo  todos={todos}></AllTodo>
    </>
  )
}

export default App
