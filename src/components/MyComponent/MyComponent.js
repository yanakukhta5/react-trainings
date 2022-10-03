import React, { useEffect, useState } from "react";

async function getData(str){
 const response = await fetch(str)
 const result = await response.text()
 return result 
}

function MyComponent(){
 const [data, setData] = useState('')
 useEffect(() => {
  getData('https://jsonplaceholder.typicode.com/todos/').then(text => setData(text))
 }, [])

 return <pre>{data}</pre>
}

export default MyComponent