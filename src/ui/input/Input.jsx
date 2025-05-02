import React from 'react'
import "./input.css"

function Input({title, placeholder, setter, value}) {
  return <div className='inputContainer'>
    <h2>{title}</h2>
    <input type="text" placeholder={placeholder} onChange={e => setter(e.target.value)} value={value} />
  </div>
}

export default Input