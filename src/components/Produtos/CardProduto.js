import React from "react";
import styled from "styled-components";

const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px; 
    box-shadow: 1px 1px 3px 2px gray;
    margin-left: 5px;
    `

const ImagemProduto = styled.img`
    width: 225px;
    height: 205px;
`
const BotaoAdd = styled.button`
    padding: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px;
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
