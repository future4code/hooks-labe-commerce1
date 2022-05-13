import React from "react";
import styled from "styled-components";

const BlocoCarrinho = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 20px;
  border: 1px solid black;
  padding: 0 10px;
  border-radius: 5px;
`;
const Itens = styled.div`
  display: flex;
  justify-content:space-between;
  margin-top: 10px;
  align-items:center;
`
const BotaoRemover = styled.button`
  border-radius: 5px;
  padding: 3px;
`

class Carrinho extends React.Component {
  CalcularValorPagar = () => {
    
    let total = 0
    for(let item of this.props.produtos){
      total += item.preco * item.quantidade
    }
    return total.toFixed(2);
  }

  render() {
    return (
      <BlocoCarrinho>
        <h3>CARRINHO: </h3>
        <div>
        {this.props.produtos.map((produto) => {
            return(
              <Itens  key = {produto.id}>
                <span>{produto.quantidade}x </span>
                <span>{produto.nomeProduto} </span>
                 <BotaoRemover onClick = {() => this.props.removeProduto(produto.id)}>Remover</BotaoRemover> 
               </Itens>
            );
        })} 
        </div>
        <div>
          <hr/>
          <p>Valor total: R${this.CalcularValorPagar()}</p>
        </div>
      </BlocoCarrinho>
    );
  }
}
export default Carrinho;
