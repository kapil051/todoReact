
export function Inputtodod(){

        const addStyle={
              margin:"10px",
              padding:"10px",
                 border:"1.5px solid black",
                    borderRadius:"6px",
        }

        return (
               <div>

               <input style={addStyle} type="text" id="title" placeholder="...title"/>  <br />
               <input style={addStyle} type="text" id="description"  placeholder="...description"/> <br />
                <button style={addStyle} onClick={addTodo} >add todo</button>
               </div>
        )
}

     async function addTodo(){
            // alert("add todo clicked");

              try{

                let res=await fetch("http://localhost:3000/todo",{
                        method:"POST",
                        body:JSON.stringify({
                               title:document.getElementById("title").value,
                              description:document.getElementById("description").value,
                                 completed:false,
                        }),
                        headers:{
                              "Content-type": "application/json"
                        }
      
                   });

                   alert("todo added");                      

              }catch(e){
                        alert(`error $(e)`);
              } 

     }