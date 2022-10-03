import React from "react"
import './Form.css'

const Form = (props) => {

 return (
  <form className="form">
   <input ref={props.refs[0]} onChange={(event) => props.setTitle(event.target.value)} className="title_input" type="text" value={props.currTitle} />
   <textarea ref={props.refs[1]} onChange={(event) => props.setDescr(event.target.value)} className="textarea" type="text" value={props.currDescr}></textarea>
   <input disabled={!props.currTitle || !props.currDescr} onClick={ event =>{
    event.preventDefault();
    let id
    if(props.isEditing) id = props.id
    else id = props.todos.length
    props.addTodo({title: props.currTitle, descr: props.currDescr, id, edit: props.isEditing} )
    props.setTitle('')
    props.setDescr('')
   } } className="button_input" type="submit" value="submit" />
  </form>
 )
}

export { Form }