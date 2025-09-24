import React from 'react'

const Produto = ( {nome, preco, categoria} ) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>preco: {preco}</p>
        <p>Curso: {categoria}</p>
    </div>
  )
}

export default Produto