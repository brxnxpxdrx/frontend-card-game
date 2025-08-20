import { useState, useEffect } from 'react'
import api from '../../src/services/api'
import './Style.css'

function Home() {
  const [users, setUsers] = useState([])
  const [nick, setNick] = useState('')
  const [email, setEmail] = useState('')      
  const [password, setPassword] = useState('')  

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data) // agora salva no estado
    console.log(usersFromApi.data) // loga os users
  }
  const  handlerSubmit = async e => {
    e.preventDefault() 
    const usuario = {
      "nick" : nick,
      "email": email,
      "password": password
    }// previne o comportamento padrão do form
    await api.post('/usuarios', usuario) // envia o post
    console.log(name, email, password)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='Container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" name='nick' placeholder='nick' onChange={e => setNick(e.target.value)}  />
        <input type="email" name='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
        <input type="password" name='senha' placeholder='Senha' onChange= {e => setPassword(e.target.value)} />
        <button type="submit" onClick={handlerSubmit}>Enviar</button>

      </form>
    </div>
  )
}

export default Home
