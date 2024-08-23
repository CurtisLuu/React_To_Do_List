import "./App.css"
import {useState, useEffect} from "react"
import NewToDoForm from "./NewToDoForm.jsx"
import ToDoList from './toDoList.jsx'
export default function App(){

const [todos, setToDos] = useState(() => {
  const localValue=localStorage.getItem("ITEMS")
    if(localValue==null) return []
    return JSON.parse(localValue)
})


useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos))
  
}, [todos])
function addToDo(title){
   setToDos((currentList) => {
    return[
      ...currentList,
      {id: crypto.randomUUID(), title, completed: false}]
     
 } )
}
function toggleToDo(id, completed){
  setToDos((currentTodos) => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo;
      })
  })
}

function deleteToDo(id){
  setToDos((currentTodos) => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  return (
    <>
    <NewToDoForm onSubmit={addToDo}/>
  <h1 className= "toDoTitle">To-Do List</h1>
 <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
  
 </>
     )
}

