import React from "react";
import Filtros from "./components/Filtros/Filtros";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import CardProduto from "./components/Produtos/CardProduto";
import styled from "styled-components";
import DeathStar from './components/Produtos/img/death-star.jpg'
import Executor from './components/Produtos/img/executor.jpg'
import MFalcon from './components/Produtos/img/millenium-falcon.jpg'
import Naboo from './components/Produtos/img/naboo-royal-starship.png'
import TantiveIV from './components/Produtos/img/tantive-iv.png'
import TFBattleship from './components/Produtos/img/trade-federation-battleship.jpeg'
import "./App.css";

const Pagina = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 20px;
`;


class App extends React.Component {
  state ={
   naves : [
    {
    imagem: {DeathStar},
    acessibilidade: 'Death Star',
    nomeProduto:'Death Star',
    preco: 1370000
    },
    {
    imagem: {MFalcon},
    acessibilidade: 'Millenium Falcon',
    nomeProduto: 'Millenium Falcon',
    preco: 165000
    },
    {
    imagem: {Executor},
    acessibilidade: 'Executor',
    nomeProduto: 'Executor',
    preco: 1118000
  
    },
    {
    imagem: Naboo,
    acessibilidade: 'Naboo Royal Starship',
    nomeProduto: 'Naboo Royal Starship',
    preco: 67000
  
    },
    {
    imagem: TFBattleship,
    acessibilidade: 'Trade Federation Battleship',
    nomeProduto: 'Trade Federation Battleship',
    preco: 658000
  
    },
    {
    imagem: TantiveIV,
    acessibilidade: 'Tantive IV',
    nomeProduto: 'Tantive IV',
    preco: 144000  
   }
  ],
    numberFiltroMinimo: "",
    numberFiltroMaximo: "",
    textFiltro: "",
    itemCarrinho: [],
    quantidade: 0
  };


  onChangeNumberMin = (event) => {
    this.setState({ numberFiltroMinimo: event.target.value });
  };
  onChangeNumberMax = (event) => {
    this.setState({ numberFiltroMaximo: event.target.value });
  };

  onChangeText = (event) => {
    this.setState({ textFiltro: event.target.value });
  };


  // onAddNave = (idNave) => {
  //   const addNave = this.state.itemCarrinho.find(naves => idNave === naves.id)

  //   if(addNave) {
  //     const newitemCarrinho = this.state.itemCarrinho.map(naves => {
  //       if(idNave === naves.id) {
  //         return {
  //           ...naves,
  //           quantidade: naves.quantidade + 1
  //         }
  //       }

  //       return naves
  //     })

  //     this.setState({itemCarrinho: newitemCarrinho})
  //   } else {
  //     const navesToAdd = naves.find(naves => idNave === naves.id)

  //     const newitemCarrinho = [...this.state.itemCarrinho, {...navesToAdd, quantidade: 1}]

  //     this.setState({itemCarrinho: newitemCarrinho})
  //   }
  // }

  // onRemoveNavesDoCarrinho = (idNave) => {
  //   const newitemCarrinho = this.state.itemCarrinho.map((naves) => {
  //     if(naves.id === idNave) {
  //       return {
  //         ...naves,
  //         quantidade: naves.quantidade - 1
  //       }
  //     }
  //     return naves
  //   }).filter((naves) => naves.quantidade > 0)

  //   this.setState({itemCarrinho: newitemCarrinho})
  // }

  render() {
    return (
      <Pagina>
        <Filtros
          numberFiltroMinimo={this.state.numberFiltroMinimo}
          numberFiltroMaximo={this.state.numberFiltroMaximo}
          textFiltro={this.state.textFiltro}
          onChangeNumberMin={this.onChangeNumberMin}
          onChangeNumberMax={this.onChangeNumberMax}
          onChangeText={this.onChangeText}
        />
        <Produtos />
        <Carrinho 
          nome  = {this.state.naves[0].nomeProduto}
          valor = {this.state.naves[0].preco}
          quantidade = {this.state.quantidade}
        />
      </Pagina>
    );
  }
}

export default App;
