import React from 'react'

function Balança() {
    const [PesoIdeal, setPesoIdeal] = React.useState()

function VerPeso(){
    let altura = Number(prompt("Qual a sua altura?"))
    if(altura < (62.1 * altura - 44.7)){
        setPesoIdeal("Seu peso ideal é: 44.7kg")
    } else if(altura < (72.7 * altura - 58)){
        setPesoIdeal("Seu peso ideal é: 58kg")
    }
}

  return (
    <div className='Balança'>
      <h2>Peso Ideal</h2>
      <button onClick={VerPeso}>Verificar</button>
      {PesoIdeal}
    </div>
  )
}

export default Balança