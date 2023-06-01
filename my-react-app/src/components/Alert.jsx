import React from 'react'

export default function Alert({message, type}) {
  return (
    <>
        <div>{message}</div>
        {
            type === 'warning' && <div>Attention</div>
        }
    </>
   
  )
}
