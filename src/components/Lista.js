import React, { useState } from 'react';

const List = () => {

  const [arrayNumeros, setArrayNumeros] = useState([1, 2, 3, 4, 5])
  const [numero, setNumero] = useState(6)

  const agregarElemento = () => {
    // console.log('click')
    setNumero(numero + 1)
    setArrayNumeros([
      ...arrayNumeros,
      numero
    ])
  }

  return (
    <div>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {arrayNumeros.map((item, index) =>
        <p key={index}>{item}</p>
      )}
    </div>
  )
}

export default List;