import React from "react";
import styled from "styled-components";
import { 
  CardProduto,
  ImagemProduto,
  BotaoAdd,
  Creditos,
  } from "../Styles/Styles";

class Card extends React.Component{
    render(){
        const produto = this.props.produtos;
        return(
            <CardProduto>
                <ImagemProduto src={produto.imagem} alt={produto.acessibilidade}/>
                <h4>{produto.nomeProduto}</h4>
                <Creditos>{produto.preco} Créditos</Creditos>
                <BotaoAdd onClick={() => this.props.clicar(produto.id)}>Adicionar ao carrinho</BotaoAdd>
            </CardProduto>
        )
    }
}

export default Card;