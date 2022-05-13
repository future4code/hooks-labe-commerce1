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
        const porcaria = this.props.produtos;
        return(
            <CardProduto>
                <ImagemProduto src={porcaria.imagem} alt={porcaria.acessibilidade}/>
                <h4>{porcaria.nomeProduto}</h4>
                <p>{porcaria.preco} Créditos</p>
                <BotaoAdd onClick={() => this.props.clicar(porcaria.id)}>Adicionar ao carrinho</BotaoAdd>
            </CardProduto>
        )
    }
}

export default Card;