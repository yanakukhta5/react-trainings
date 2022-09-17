import React from "react";

export default class Summary extends React.Component{
 constructor(props){
  super(props)
 }
 render(){
  return (
   <p className={`summary ${this.props.summaryShow}`}>Правильных ответов: {this.props.right}/{this.props.possible}</p>
  )
 }
}