import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Seta from '../../assets/seta.png';
import { ContainerPrincipal, Imagem, H3, Input } from './styles';
import H1 from '../../components/title'
import Section from '../../components/Section';
import Button from '../../components/Button';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();
  const inputNome = useRef();
  const inputIdade = useRef();

  async function addUsuario() {
    const { data: novo_usuario } = await axios.post("http://localhost:3001/usuarios", {
      nome: inputNome.current.value, idade: inputIdade.current.value
    });

    setUsuarios([...usuarios, novo_usuario]);

    navigate('/usuarios')
  }

  return (
    <ContainerPrincipal>
      <Imagem alt='logo' src={Logo} />
      <Section>
        <H1>Cadastro!</H1>

        <H3>Nome:</H3>
        <Input ref={inputNome} placeholder='Nome' />
        <H3>Idade:</H3>
        <Input ref={inputIdade} placeholder='Idade' />

          <Button onClick={addUsuario} >
            CADASTRAR
            <img alt='seta' src={Seta} width='30px' />
          </Button>

      </Section>
    </ContainerPrincipal>)
}

export default App;