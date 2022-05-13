import React from "react";
import Filtros from "./components/Filtros/Filtros";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
// import CardProduto from "./components/Produtos/CardProduto";
import styled from "styled-components";
import DeathStar from "./components/Produtos/img/death-star.jpg";
import Executor from "./components/Produtos/img/executor.jpg";
import MFalcon from "./components/Produtos/img/millenium-falcon.jpg";
import Naboo from "./components/Produtos/img/naboo-royal-starship.png";
import TantiveIV from "./components/Produtos/img/tantive-iv.png";
import TFBattleship from "./components/Produtos/img/trade-federation-battleship.jpeg";
import "./App.css";

const Pagina = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 20px;
`;


class App extends React.Component {
  state = {
    carrinho: [],
    // quantidade: 0,
    valorMinimo: "",
    valorMaximo: "",
    textoQuery: "",
    sortingParameter:"precoAlto",
    naves: [
      {
        id: 1,
        imagem: DeathStar,
        acessibilidade: "Death Star",
        nomeProduto: "Death Star",
        preco: 30,
        quantidade: 0,
        descrição: "Melhor nave"
      },
      {
        id: 2,
        imagem: MFalcon,
        acessibilidade: "Millenium Falcon",
        nomeProduto: "Millenium Falcon",
        preco: 20,
        quantidade: 0,
        descrição: "Melhor nave 2"
      },
      {
        id: 3,
        imagem: Executor,
        acessibilidade: "Executor",
        nomeProduto: "Executor",
        preco: 10,
        quantidade: 0,
        descrição: "Nave mais rápida"
      },
      {
        id: 4,
        imagem: Naboo,
        acessibilidade: "Naboo Royal Starship",
        nomeProduto: "Naboo Royal Starship",
        preco: 67000,
        quantidade: 0,
        descrição: "Nave mais rápida 2"
      },
      {
        id: 5,
        imagem: TFBattleship,
        acessibilidade: "Trade Federation Battleship",
        nomeProduto: "Trade Federation Battleship",
        preco: 658000,
        quantidade: 0,
        descrição: "Muito militar"
      },
      {
        id: 6,
        imagem: TantiveIV,
        acessibilidade: "Tantive IV",
        nomeProduto: "Tantive IV",
        preco: 144000,
        quantidade: 0,
        descrição: "Velocidade incrivel"
      },
    ]
  };

  updateMinPrice = (event) => {
    this.setState({ valorMinimo: event.target.value });
    
  };
  updateMaxPrice = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  updateQuery = (event) => {
    this.setState({ textoQuery: event.target.value });
  };
  
  updateSortingParameter = (event) => {
    this.setState({ sortingParameter: event.target.value });
  };
 
  adicionarProdutoCarrinho = (idProduto) => {
    const adiciocionarProduto = this.state.carrinho.find(
      (produto) => idProduto === produto.id
    );

    if (adiciocionarProduto) {
      const itemCarrinho = this.state.carrinho.map((produto) => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }

        return produto;
      });

      this.setState({ carrinho: itemCarrinho });
    } else {
      const produtoToAdd = this.state.naves.find((produto) => idProduto === produto.id);

      const itemCarrinho = [
        ...this.state.carrinho,
        { ...produtoToAdd, quantidade: 1 },
      ];

      this.setState({ carrinho: itemCarrinho });
    }
  };
  
  removerProduto = (idProduto) => {
    console.log(idProduto)
    const novoItemCarrinho = this.state.carrinho.map((produto) => {
        if (produto.id === idProduto) {
          console.log(produto.id)
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ carrinho: novoItemCarrinho });
  };

  render() {
    return (
      <Pagina>
        <div>{this.state.valorMinimo}</div>
        <div></div>
        <div>{this.state.valorMaximo}</div>
        <div></div>
        <div>{this.state.textoQuery}</div> 
      
        <Filtros
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          textoQuery={this.state.textoQuery}
          updateQuery={this.updateQuery}
          updateMinPrice={this.updateMinPrice}
          updateMaxPrice={this.updateMaxPrice}
        />
  
        <Produtos produtos={this.state.naves}
        clicar={this.adicionarProdutoCarrinho}
         valorMinimo={this.state.valorMinimo}
         valorMaximo={this.state.valorMaximo}
         textoQuery={this.state.textoQuery}        
         sortingParameter={this.state.sortingParameter}
         updateSortingParameter={this.updateSortingParameter}
        />
        
        <Carrinho 
           produtos={this.state.carrinho} 
           removeProduto = {this.removerProduto}
           />
     
      </Pagina>
    );
  }
}

export default App;
