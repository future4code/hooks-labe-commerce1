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
        const produto = this.props.produtos;
        return(
            <CardProduto>
                <ImagemProduto src={produto.imagem} alt={produto.acessibilidade}/>
                <h4>{produto.nomeProduto}</h4>
                <p>{produto.preco} Créditos</p>

                <BotaoAdd onClick={() => this.props.clicar(produto.id)}>Adicionar ao carrinho</BotaoAdd>
            </CardProduto>
        )
    }
}

export default Card;