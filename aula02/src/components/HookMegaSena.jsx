import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState(null)
    const [lista, setLista] = useState([])

    function sortearNumero () {
        if (lista.length < 6){
            let numSorteado = Math.floor(Math.random() * 60) + 1
            setSorteado(numSorteado)
            setLista([...lista, numSorteado])
        }
        else {
            alert("Já temos todos os números")
        }
    }

  return (
    <div>
        <h1>Sorteador da Mega</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h1>Número sorteado: {sorteado}</h1>
        <h1>Sorteados: {lista.join(" , ")}</h1>
    </div>
  )


}

export default HookMegaSena
