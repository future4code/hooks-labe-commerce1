import React from "react";
import Filtros from "./components/Filtros/Filtros";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
// import CardProduto from "./components/Produtos/CardProduto";
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
  imagem: DeathStar,
  acessibilidade: 'Death Star',
  nomeProduto:'Death Star',
  preco: 1370000,
  quantidade: 0
  },
  {
  id: 2,
  imagem: MFalcon,
  acessibilidade: 'Millenium Falcon',
  nomeProduto: 'Millenium Falcon',
  preco: 165000,
  quantidade: 0

  },
  {
  id: 3,
  imagem: Executor,
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
    // quantidade: 0,
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
      const adiciocionarProduto = this.state.carrinho.find(produto => idProduto === produto.id)
  
      if(adiciocionarProduto) {
        const itemCarrinho = this.state.carrinho.map(produto => {
          if(idProduto === produto.id) {
            return {
              ...produto,
              quantidade: produto.quantidade + 1
            }
          }
  
          return produto
        })
  
        this.setState({carrinho: itemCarrinho})
      } else {
        const produtoToAdd = naves.find(produto => idProduto === produto.id)
  
        const itemCarrinho = [...this.state.carrinho, {...produtoToAdd, quantidade: 1}]
  
        this.setState({carrinho: itemCarrinho})
      }
    }
    removerProduto = (idProduto) => {
        const novoItemCarrinho = this.state.carrinho.map((produto) => {
          if(produto.id === idProduto) {
            return {
              ...produto,
              quantidade: produto.quantidade - 1
            }
          }
          return produto
        }).filter((produto) => produto.quantidade > 0)
    
        this.setState({carrinho: novoItemCarrinho})
      }
  
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
          produtos = {naves}
          clicar = {this.adicionarProdutoCarrinho}
        />
        <Carrinho 
          produto = {naves}
          quantidade = {this.state.quantidade}
          carrinho = {this.state.carrinho}
          adicionaProduto = {this.adicionarProdutoCarrinho}
          removeProduto = {this.removerProduto}
        />
      </Pagina>
    );
  }
}

export default App;
