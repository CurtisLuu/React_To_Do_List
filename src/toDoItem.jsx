function toDoItem({completed, id, title, toggleToDo, deleteToDo}){
    return( <li>
        <label>
          <input className= "checkBox" type="checkbox" checked={completed} onChange={e=> toggleToDo(id, e.target.checked)}/>
          {title}
        </label>
        <button onClick= {() => deleteToDo(id)}className="deletebtn">Delete</button>
      </li>)
}
export default toDoItem