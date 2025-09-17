import React from 'react'

const EstaComSono = (props) => {
  return (
    <div>
        {props.comSono ? <h1>Hora de descançar</h1> : <h1>Bora estudar mais um pouco</h1>}
    </div>
  )
}

export default EstaComSono