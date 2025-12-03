import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DpoLgpd = () => {

    const [dpo, setdpo] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/dpolgbd")
        .then(response => setdpo(response.data))
        .catch(error => console.error("Erro ao carregar a lista dpo lgbd", error)
    )
    }, [])

  return (
    <div>
        <h1>DPO Lgpd:</h1>
        {
            dpo.map((dpo) =>(
                <div key={dpo.id}>
                    {dpo.texto}
                </div>
            ))
        }
    </div>
  )
}

export default DpoLgpd