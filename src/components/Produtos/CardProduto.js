import React from "react";
import styled from "styled-components";

const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
`
const ImagemProduto = styled.img`
    width: 231px;
    height: 220px;
`

const BotaoAdd = styled.button`
    margin: 10px;
`

class Card extends React.Component{
    render(){
        return(
            <CardProduto>
                <ImagemProduto src={this.props.imagem} alt={this.props.acessibilidade}/>
                <h4>{this.props.nomeProduto}</h4>
                <p>{this.props.preco} Créditos</p>
                <BotaoAdd>Adicionar ao carrinho</BotaoAdd>
            </CardProduto>
        )
    }
}

export default Card;