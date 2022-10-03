import React from "react";
import './List.css'

function List(props){
 return (
  <ul>
   {props.todos.map(todo => {
    return (<li key={todo.id} className="li">
     <p className="title">{todo.title}</p>
     <p>{todo.descr}</p>
     <button onClick={() => {props.setEditing(true); props.editTodo(todo)}} className="button_edit">edit</button>
     <button onClick={() => props.deleteTodo(todo)} className="button_delete">delete</button>
    </li>)
   })}
  </ul>
 )
}

export { List }