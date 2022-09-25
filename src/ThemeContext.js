import React from 'react'

const theme = {
 day: {
   backgroundColor: "white",
   color: "black"
 },
 night: {
   backgroundColor: "black",
   color: "white"
 }
}

const ThemeContext = React.createContext()

export { ThemeContext, theme }
