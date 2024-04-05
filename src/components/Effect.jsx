import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Effect = () => {
    const num = 1;
    const [form, setForm] = useState("");
    const [number, setNumber] = useState(1)
    useEffect(() => {
        setNumber(number + 1);
     console.log(number);
    }, [form])
    
  return (
    <div>
      <input type="text" onChange={(event) => setForm(event.target.value)} />
      <br />
      <br />
      <input type="email" />
    </div>
  )
}

export default Effect
