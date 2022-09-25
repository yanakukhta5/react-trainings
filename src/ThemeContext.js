import React from 'react'

const theme = {
 day: {
   backgroundColor: "red",
   color: "black"
 },
 night: {
   backgroundColor: "black",
   color: "white"
 },
 colored: {
  backgroundColor: "pink",
  color: "green"
 }
}

const ThemeContext = React.createContext()

export { ThemeContext, theme }
