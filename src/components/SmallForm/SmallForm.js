import React, { useMemo, useContext, useState } from 'react'
import { ThemeContext } from '../../ThemeContext'

function SmallForm() {
  function userCreate(user1) {
    const user = { ...user1 }
    console.log(user)
    return user
  }

  const [count, setCount] = useState(0)
  const [fullname, setFullname] = useState({ name: '', surname: '' })
  const user = useMemo(() => {
    userCreate(fullname)
  }, [fullname])
  const theme = useContext(ThemeContext)

  return (
    <div style={theme.night}>
      <form>
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
      </form>
    </div>
  )
}

export { SmallForm }
