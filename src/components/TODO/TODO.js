import React, { useState, useEffect, useRef } from "react"
import "./TODO.css"
import { Form } from "./Form/Form"
import { List } from "./List/List"

function TODO({title}){
 const [todos, setTodos] = useState([])

 useEffect(() => {
  alert('List of todos have chanjed')
 }, [todos])

 const inputTitle = useRef()
 const inputDescr = useRef()

 const [currTitle, setTitle] = useState('')
 const [currDescr, setDescr] = useState('')
 const [isEditing, setEditing] = useState(false)
 const [id, setId] = useState(0)

 function addTodo(todo){
  if(todo.edit){
   setTodos(todos.map( t => t.id === todo.id ? todo : t))
  }
  else{
   setTodos([...todos, todo])
  }
  setEditing(false)
  setId(todos.length)
 }

 function editTodo(todo){
  setId(todo.id)
  setTitle(todo.title)
  inputTitle.current.value = todo.title;
  setDescr(todo.descr)
  inputDescr.current.value = todo.descr;
 }

 function deleteTodo(todo){
  setTodos((todos) => todos.filter((t) => t.id !== todo.id))
 }

 return (
  <div className="TODO">
   <h1>{title}</h1>
   <Form refs={[inputTitle, inputDescr]} id={id} todos={todos} addTodo={addTodo} isEditing={isEditing} currTitle={currTitle} currDescr={currDescr} setTitle={setTitle} setDescr={setDescr} />
   <List deleteTodo={deleteTodo} editTodo={editTodo} todos={todos} isEditing={isEditing} setEditing={setEditing} />
  </div>
 )
}

export { TODO }