import React, { useState } from 'react';

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1)
  }

  return (
    <div>
      <h3>Clickeamos {numero} veces</h3>
      <button onClick={aumentar}>
        Clickeame
      </button>
    </div>
  )
}

export default Contador;