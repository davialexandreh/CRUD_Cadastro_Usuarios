import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import users from '../../assets/logo-users.png';
import Seta from '../../assets/seta.png';
import Del from '../../assets/del.png';
import { ContainerPrincipal, Imagem, Usuario } from './styles';
import H1 from '../../components/title'
import Section from '../../components/Section';
import Button from '../../components/Button';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate()

  //useEffect: É usado em duas situações, 1ª quando a minha aplicação inicia e 2ª quando um estado dentro do meu array[] de dependência é alterado
  useEffect(() => {
    async function buscarUsuarios() {
      const { data: novos_usuarios } = await axios.get("http://localhost:3001/usuarios")

      setUsuarios(novos_usuarios);
    }
    buscarUsuarios()
  }, [])

  async function deletarUsuario(usuarioid) {
    await axios.delete(`http://localhost:3001/usuarios/${usuarioid}`)
    const novosUsuarios = usuarios.filter(usuario => usuario.id !== usuarioid)
    setUsuarios(novosUsuarios);
  }

  function pagUsuarios() {
    navigate('/')
  }

  return (
    <ContainerPrincipal>
      <Imagem alt='logo' src={users} />
      <Section isBlur={true}>
        <H1>Lista de Usuários!</H1>

        <ul>
          {usuarios.map((usuario) => (
            <Usuario key={usuario.id}>
              <p>Nome: {usuario.nome}</p>
              <p>Idade: {usuario.idade}</p>
              <button onClick={() => deletarUsuario(usuario.id)} className='button-del'><img alt='logo-del' src={Del} height='20px' /></button>
            </Usuario>
          ))}
        </ul>

          <Button voltar={true} onClick={pagUsuarios}>
              <img alt='seta' src={Seta} width='30px' />
              Voltar
          </Button>
       
      </Section>
    </ContainerPrincipal>)
}

export default Usuarios;