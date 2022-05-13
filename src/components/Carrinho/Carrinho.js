import React from "react";
import styled from "styled-components";

const BlocoCarrinho = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 600px;
  padding: 0 10px;
`;
let valorTotal = 0;
let mult = 0;
class Carrinho extends React.Component {
  
  
  CalcularValorPagar = () => {
    
    let total = 0
    for(let produto of this.props.produtos){
      total += produto.preco * produto.quantidade
    }
    return total.toFixed(2);
    // console.log(this.valor)
    // this.props.produtos.map((produto) =>{
     
    //  let valor = produto.quantidade
    //  let preco = produto.preco

    //  mult = valor * preco
    //  valorTotal += mult
    //  console.log(valorTotal)
    //   return valorTotal
    // })
    // return (
    //   <>
    //     <p>Valor {valorTotal}</p>
    //   </>
    // )
  }
  render() {
    return (
      <BlocoCarrinho>
        <h3>CARRINHO: </h3>
        <div>
        {this.props.produtos.map((produto) => {
          
            // valorTotal += this.props.produtos.preco * this.props.produtos.quantidade
            return(
              <div  key = {produto.id}>
                <span>{produto.quantidade}</span>
                <span>{produto.nomeProduto}</span>
                 <button onClick = {() => this.props.removeProduto(produto.id)}>Remover</button> 
               </div>
            );
          
        
        })} 
        </div>
        <div>
          <hr/>
          <p>Valor total: {this.CalcularValorPagar()}</p>
        
        </div>
        {/* <div>{this.mostrarProduto()}</div>
        <div>{this.CalcularValorPagar()}</div>
        <button onClick = {this.props.adicionarProduto}>Adicionar</button> */}
      </BlocoCarrinho>
    );
  }
}
export default Carrinho;
