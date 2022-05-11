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

const naves = [
  {
  id: 1,
  imagem: {DeathStar},
  acessibilidade: 'Death Star',
  nomeProduto:'Death Star',
  preco: 1370000,
  quantidade: 0
  },
  {
  id: 2,
  imagem: {MFalcon},
  acessibilidade: 'Millenium Falcon',
  nomeProduto: 'Millenium Falcon',
  preco: 165000,
  quantidade: 0

  },
  {
  id: 3,
  imagem: {Executor},
  acessibilidade: 'Executor',
  nomeProduto: 'Executor',
  preco: 1118000,
  quantidade: 0

  },
  {
  id: 4,
  imagem: Naboo,
  acessibilidade: 'Naboo Royal Starship',
  nomeProduto: 'Naboo Royal Starship',
  preco: 67000,
  quantidade: 2
  },
  {
  id: 5,
  imagem: TFBattleship,
  acessibilidade: 'Trade Federation Battleship',
  nomeProduto: 'Trade Federation Battleship',
  preco: 658000,
  quantidade: 0

  },
  {
  id: 6,
  imagem: TantiveIV,
  acessibilidade: 'Tantive IV',
  nomeProduto: 'Tantive IV',
  preco: 144000,  
  quantidade: 0
 }
]

class App extends React.Component {
  state ={
    carrinho: [],
    numberFiltroMinimo: "",
    numberFiltroMaximo: "",
    textFiltro: "",
    itemCarrinho: [],
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

  adicionarProdutoCarrinho = (idProduto) =>{
    const adicionarMaisProduto = this.state.carrinho.find((item) => idProduto === naves.id);

    if(adicionarMaisProduto){
      const produtoCarrinho = this.state.carrinho.map((item) => {
        if(idProduto === naves.id){
          return{
            ...naves,
            quantidade: naves.quantidade + 1
          }
        }
        return naves;
      });
      this.setState({carrinho: produtoCarrinho})
    }
    else{
      const adicionarAoCarrinho = this.state.carrinho.find((item) => idProduto === naves.id);

      const novoProduto = [
        ... this.state.carrinho,
        {...adicionarAoCarrinho, quantidade: 1}
      ]
      this.setState({carrinho: novoProduto})
    }
  }
  

  removerProduto = (idProduto) => {
    const adicionarMaisProduto = this.state.carrinho.find((item) => idProduto === naves.id);

    if(adicionarMaisProduto){
      const produtoCarrinho = this.state.carrinho.map((item) => {
        if(idProduto === naves.id){
          return{
            ...naves,
            quantidade: naves.quantidade - 1
          }
        }
        return naves;
      });
      this.setState({carrinho: produtoCarrinho})
    }
    if(this.state.quantidade > 0){

      this.setState({quantidade: this.state.quantidade - 1}); 
    }
    else{
      const adicionarAoCarrinho = this.state.carrinho.find((item) => idProduto === naves.id);

      const novoProduto = [
        ... this.state.carrinho,
        {...adicionarAoCarrinho, quantidade: 1}
      ]
      this.setState({carrinho: adicionarAoCarrinho})
    }
  }
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
        <Produtos 
          adicionarProduto = {this.adicionarProdutoCarrinho}
        />
        <Carrinho 
          produtos = {this.state.carrinho}
          adicionaProduto = {this.adicionarProdutoCarrinho}
          removeProduto = {this.removerProduto}
        />
      </Pagina>
    );
  }
}

export default App;
