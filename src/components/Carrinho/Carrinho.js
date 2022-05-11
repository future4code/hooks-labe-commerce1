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
       <p>
         <span>   {this.props.quantidade}x  </span>
         <span>   {this.props.nome}         </span>
         <span>   {this.props.valor}        </span>
         <button onClick={this.props.remover}>   REMOVER      </button>
       </p>
     )
    }
  }
  CalcularValorPagar = () => {
    let valorTotal = this.props.quantidade * this.props.valor
    return(
      <p>
        <hr/>
        <p>Valor total: R${valorTotal},00</p>
      </p>
    )
  }
  render() {
    return (
      <BlocoCarrinho>
        <h3>Carrinho: </h3>
        <div>{this.mostrarProduto()}</div>
        {this.CalcularValorPagar()}
        <button onClick = {this.props.adicionarProduto}>Adicionar</button>
      </BlocoCarrinho>
    );
  }
}
export default Carrinho;
