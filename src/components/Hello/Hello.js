import React from "react";

class Hello extends React.Component{
 constructor(props){
  super(props)
 }
 defaultProps = {
  name: 'Незнакомец'
}
 render(){
  return <p>Hello, {this.props.name}</p>
 } 
}

export { Hello }