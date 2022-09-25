import React, { useState, useMemo } from 'react'
import { theme } from './ThemeContext'

const questions = [
  {
    question: 'Сколько будет 1+1?',
    answer: '2'
  },
  {
    question: 'Сколько будет 2+1?',
    answer: '3'
  },
  {
    question: 'Как зовут Андрея?',
    answer: 'Андрей'
  }
]

function App() {
  function userCreate(user1) {
    const user = { ...user1 }
    console.log(user)
    return user
  }

  const [count, setCount] = useState(0)
  const [fullname, setFullname] = useState({ name: '', surname: '' })
  const user = useMemo(() => {userCreate(fullname)}, [fullname]) 
  return (
    <div style={theme.night}>
      <input
        onChange={(event) =>
          setFullname({ ...fullname, name: event.target.value })
        }
        value={fullname.name}
        type="text"
      ></input>
      <input
        onChange={(event) =>
          setFullname({ ...fullname, surname: event.target.value })
        }
        value={fullname.surname}
        type="text"
      ></input>
      <button onClick={() => setCount(count + 1)}>
        Меня нажали {count} раз
      </button>
    </div>
  )
}

export default App
