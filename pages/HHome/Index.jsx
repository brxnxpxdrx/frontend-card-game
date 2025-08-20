import { useState } from 'react'

import './Style.css'

function Home() {

  return (
    <div className='Container'>
      <form >
        <h1>
          Cadastro de Usuários
        </h1>
        <input type="text" name='nome' placeholder='Nome'  />
        <input type="email" name='email' placeholder='Email' />
        <input type="password" name='senha' placeholder='Senha' />
        <button>
          Enviar
        </button>
        </form>
  </div>

  )
}

export default Home
