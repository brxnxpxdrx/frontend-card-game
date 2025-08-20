import { useState, useEffect } from 'react'
import api from '../../src/services/api'
import './Style.css'

function Home() {
  const [users, setUsers] = useState([])

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data) // agora salva no estado
    console.log(usersFromApi.data) // loga os users
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='Container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" name='nome' placeholder='Nome'  />
        <input type="email" name='email' placeholder='Email' />
        <input type="password" name='senha' placeholder='Senha' />
        <button>Enviar</button>
        <p>{JSON.stringify(users)}</p> {/* só pra mostrar */}
      </form>
    </div>
  )
}

export default Home
