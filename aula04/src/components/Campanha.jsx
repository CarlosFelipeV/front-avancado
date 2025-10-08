import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function definirMensagem(mes) {
        if (mes === "setembro") {
            return "Prevenção ao suicidio"
        } else if (mes === "outubro") {
            return "Concientizaçao sobre o cancer de mama"
        } else if (mes === "novembro") {
            return "Prevenção e combate ao cncer de próstata"
        }
    }

    function definirCor(mes) {
        if (mes === "setembro") {
            return styles.setembro
        } else if (mes === "outubro") {
            return styles.outubro
        } else if (mes === "novembro") {
            return styles.novembro
        }
    }

  return (
    <div className={definirCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>
  )
}

export default Campanha