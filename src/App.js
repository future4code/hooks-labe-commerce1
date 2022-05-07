import React from 'react';
import Filtros from './components/Filtros/Filtros';
import Produtos from './components/Produtos/Produtos';
import Carrinho from './components/Carrinho/Carrinho';
import styled from 'styled-components';
import './App.css';

const Pagina = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 20px;
`

class App extends React.Component {
  render(){
    return (
      <Pagina>
        <Filtros/>
        <Produtos/>
        <Carrinho/>
      </Pagina>
    );
  }
}

export default App;
