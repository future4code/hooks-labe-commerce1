import React from "react";

import styled from "styled-components";

import styled from 'styled-components'
import CardProduto from './CardProduto'
import DeathStar from './img/death-star.jpg'
import Executor from './img/executor.jpg'
import MFalcon from './img/millenium-falcon.jpg'
import Naboo from './img/naboo-royal-starship.png'
import TantiveIV from './img/tantive-iv.png'
import TFBattleship from './img/trade-federation-battleship.jpeg'

 const Container= styled.div`
    width: 55%;
    height: 600px;
    padding: 0 10px;`

const DisplayProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
`
const Ordenacao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


class Produtos extends React.Component{

    render(){
        return(
            <Container>
                <Ordenacao>
                    <h2>PRODUTOS</h2>
                    <div>
                        <label>Ordenar: </label>
                        <select>
                            <option value="maior">Maior</option>
                            <option value="menor">Menor</option>
                        </select>
                    </div>
                </Ordenacao>

                <DisplayProdutos>
                    <CardProduto
                        imagem={DeathStar}
                        acessibilidade={'Death Star'}
                        nomeProduto={'Death Star'}
                        preco={1370000}
                    />

                    <CardProduto
                        imagem={MFalcon}
                        acessibilidade={'Millenium Falcon'}
                        nomeProduto={'Millenium Falcon'}
                        preco={165000}
                    />

                    <CardProduto
                        imagem={Executor}
                        acessibilidade={'Executor'}
                        nomeProduto={'Executor'}
                        preco={1118000}
                    />

                    <CardProduto
                        imagem={Naboo}
                        acessibilidade={'Naboo Royal Starship'}
                        nomeProduto={'Naboo Royal Starship'}
                        preco={67000}
                    />

                    <CardProduto
                        imagem={TFBattleship}
                        acessibilidade={'Trade Federation Battleship'}
                        nomeProduto={'Trade Federation Battleship'}
                        preco={658000}
                    />

                    <CardProduto
                        imagem={TantiveIV}
                        acessibilidade={'Tantive IV'}
                        nomeProduto={'Tantive IV'}
                        preco={144000}
                    />
                </DisplayProdutos>
            </Container>
        );
    }
}
export default Produtos;
