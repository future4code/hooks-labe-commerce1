import React from "react";
import styled from "styled-components";

const BlocoCarrinho = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 600px;
  padding: 0 10px;
`;

class Carrinho extends React.Component {
  mostrarProduto = () =>{
    if(this.props.quantidade > 0){
     return(
      <>
         <span>   {this.props.quantidade}x  </span>
         <span>   {this.props.nome}         </span>
         <span>   {this.props.valor}        </span>
         <button onClick = {this.props.remover}> REMOVER </button>
      </>
     )
    }
  }
  CalcularValorPagar = () => {
    let valorTotal = this.props.quantidade * this.props.valor
    return(
      <>
        <hr/>
        <p>Valor total: R${valorTotal},00</p>
      </>
    )
  }
  render() {
    return (
      <BlocoCarrinho>
        <h3>CARRINHO: </h3>
        {this.props.produtos.map((item) => {
          return(
            <>
              <div>{item.nomeProduto}</div>
              <div>{item.preco}</div>
              <button onClick = {this.props.removeProduto(item.id)}>Remover</button>
            </>
          )
        })}
        {/* <div>{this.mostrarProduto()}</div>
        <div>{this.CalcularValorPagar()}</div>
        <button onClick = {this.props.adicionarProduto}>Adicionar</button> */}
      </BlocoCarrinho>
    );
  }
}
export default Carrinho;
