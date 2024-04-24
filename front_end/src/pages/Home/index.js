/*
  - A sintaxe abaixo é chamada de JSX (misturar HTML com JS)
  - Dentro de um "return", para adicionar mais de um elemento, basta coloca tudo dentro dos ()
  - O componente react sempre irá *RETORNAR* código HTML e no "return", se eu colocar chaves{}, ele entende que ali dentro terá código JS
  - No react eu não posso renderizar dois elementos por isso uso <> e </>. Exemplo:
      ReactDOM.render(<> <App /> <EstilosGlobais /> </>, document.getElementById('root'));
  - Estado: É tipo uma variável que renderiza a página ao contrário de uma variável normal. Para criá-lo, usar o 'react hooks (ferramenta que nos auxiliam a fazer alguma coisa)'
  - React Hooks: Exemplo - const [usuarios, setUsuarios] = useState([])
    Obs: 1. dentro dos parênteses do ->useState([])<- tenho que iniciar com algum valor ou um array(colchetes) vazio
         2. Um estado no react é imutável, só passo alterar o seu valor por completo, por isso é usado, no caso acima, o setUsuarios 
  - Spread operator: é representado pelos 3 pontos => ...
  - useRef: Facilita o mapeamento de um item no html para que eu possa pegar info desse item através do "ref"
  
  *CONECTANDO BACK END COM FRONT*
  - Instalar: yarn add axios
  - O cors habilita o acesso do front ao back
  */

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