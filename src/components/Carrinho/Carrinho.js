import React from "react";
import styled from "styled-components";
import {

  BlocoCarrinho,
  Itens,
  BotaoRemover,

  TotalCreditos,
  H3carrinho,
} from "../Styles/Styles";

class Carrinho extends React.Component {
  
  
  CalcularValorPagar = () => {
    
    let total = 0
    for(let produto of this.props.produtos){
      total += produto.preco * produto.quantidade
    }
    return total.toFixed(2);
  }
  render() {
    return (
      <BlocoCarrinho>
        <H3carrinho>CARRINHO</H3carrinho>
        <div>
        {this.props.produtos.map((produto) => {
            return(
              <Itens  key = {produto.id}>
                <span>{produto.quantidade}</span>
                <span>x {produto.nomeProduto}</span>
                 <BotaoRemover onClick = {() => this.props.removeProduto(produto.id)}>Remover</BotaoRemover> 
               </Itens>
            );
        })} 
        </div>
        <TotalCreditos>          
          <p>Total Créditos: {this.CalcularValorPagar()}</p>
        </TotalCreditos>
      </BlocoCarrinho>
    );
  }
}
export default Carrinho;
