import React from "react";

class MyComponentErr extends React.Component{
 constructor(props){
  super(props)
  this.state = {
   hasErr: false
  }
 }
 static getDerivedStateFromError(){
  return {hasErr: true}
 }
 render(){
  if(this.state.hasErr === true) return <p>error</p>
  return this.props.children
 }
}

export default MyComponentErr