import { useState } from 'react';


function NewToDoForm(props){

const [newItem, setNewItem] = useState("")
    
  
function handleSubmit(input){
   input.preventDefault()
   if(newItem==="") return
   props.onSubmit(newItem)
   setNewItem("")
  }


 return(
   <div className="wrapper">
   <form onSubmit = {handleSubmit} className="new-item-list"> 
         <div className="form-row">
             <input 
             className = "inputBox"
             placeholder="Input Task"
             value = {newItem}  
             onChange={(e => setNewItem(e.target.value))}
             type="text" 
             id="item" 
            />
         </div>
         <button className="btn">Add</button>
         
   </form> 
   </div> 
 )
}
 export default NewToDoForm