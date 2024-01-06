
export function Inputtodod(){

        const addStyle={
              margin:"10px",
              padding:"10px",
                 border:"1.5px solid black",
                    borderRadius:"6px",
        }

        return (
               <div>

               <input style={addStyle} type="text" placeholder="...title"/>  <br />
               <input style={addStyle} type="text"  placeholder="...description"/> <br />
                <button style={addStyle} >add todo</button>
               </div>
        )
}