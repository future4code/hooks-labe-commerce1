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
    return(
      <p>
        <span>  {this.props.quantidade}x  </span>
        <span>  {this.props.nome}         </span>
        <span>  {this.props.valor}        </span>
      </p>
    )
  }
  render() {
    return (
      <BlocoCarrinho>
        <h3>Carrinho: </h3>
        <div>{this.mostrarProduto()}</div>
      </BlocoCarrinho>
    );
  }
}
export default Carrinho;
