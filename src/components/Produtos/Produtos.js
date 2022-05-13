import React from "react";
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
                    {this.props.sortingParameter}
                    <div>
                        <label for="sort">Ordenar: </label>
                        <select name="sort"
                        value={this.props.sortingParameter}
                        onChange={this.props.updateSortingParameter}>                        
                            <option value="maior">Maior</option>
                            <option value="menor">Menor</option>
                        </select>
                    </div>
                </Ordenacao>
                <DisplayProdutos>

                    {/* estou mexendo no filter aqui rsrsrs WF */}
                    {this.props.produtos
                    .sort((startObj,nexObj)=>{
                        switch (this.props.sortingParameter) {
                            case "maior":
                                return startObj.preco - nexObj.preco                                                       
                            case "menor":
                                return nexObj.preco - startObj.preco
                                default:
                                    break;
                        }                       
                    })
                    .filter(obj =>{  
                        return obj.nomeProduto.toLowerCase().includes(this.props.textoQuery.toLowerCase())                              
                    })
                    .filter(val=>{
                        return this.props.valorMinimo === "" || val.preco >= this.props.valorMinimo
                    })
                    .filter(val=>{
                        return this.props.valorMaximo === "" || val.preco <= this.props.valorMaximo
                    })
                    .map((produto) => {
                        return(
                            <div key={produto.id}>
                                <CardProduto produtos = {produto} clicar = {this.props.clicar}/>
                                {console.log(produto)}
                            </div>
                        )
                    })}
                </DisplayProdutos>

                {/* <DisplayProdutos>
                    <CardProduto
                        produtos = {this.props.produtos[0]}
                        adicionarProduto = {this.props.adicionarProduto}
                    />
                    <CardProduto
                        produtos = {this.props.produtos[1]}
                    />
                    <CardProduto
                        produtos = {this.props.produtos[2]}
                    />
                    <CardProduto
                        produtos = {this.props.produtos[3]}
                    />
                    <CardProduto
                        produtos = {this.props.produtos[4]}
                    />
                    <CardProduto
                        produtos = {this.props.produtos[5]}
                    /> */}

                    {/* <CardProduto
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
                    /> */}
                {/* </DisplayProdutos> */}
            </Container>
        );
    }
}
export default Produtos;
