import React from 'react';
import Filtros from './components/Filtros/Filtros';
import Produtos from './components/Produtos/Produtos';
import Carrinho from './components/Carrinho/Carrinho';
import './App.css';


class App extends React.Component {
  render(){
    return (
      <div>
        <Filtros/>
        <Produtos/>
        <Carrinho/>
      </div>
    );
  }
}

export default App;
