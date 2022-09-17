import React from "react"

export default class Guestion extends React.Component{
 constructor(props){
  super(props)
 }

 render(){
 return (
  <label className={`Guestion ${this.props.isRight}`}>
   {this.props.text}
   <input className="input" value={this.props.value} onInput={ event => this.props.handlerInput(event.target.value, this.props.index)} />
  </label> )
 }
}