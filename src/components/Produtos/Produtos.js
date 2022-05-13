import React from "react";
import styled from 'styled-components';
import CardProduto from './CardProduto';
import {
    Container,
    DisplayProdutos,
    Ordenacao,
    H2,
  } from "../Styles/Styles";

class Produtos extends React.Component{

    render(){        
        return(
            <Container>
                <Ordenacao>
                  
                    <H2>PRODUTOS</H2>                                                      
                    <div>                        
                        <label for="sort">Ordenar: </label>
                        <select name="sort"
                        value={this.props.sortingParameter}
                        onChange={this.props.updateSortingParameter}>                        
                            <option value="precoAlto">Maior</option>
                            <option value="precoBaixo">Menor</option>
                        </select>
                    </div>  
                                    
                </Ordenacao>
                
                <DisplayProdutos>

                    {/* estou mexendo no filter aqui rsrsrs WF */}
                    {this.props.produtos
                    .sort((obj1,obj2)=>{
                        switch (this.props.sortingParameter) {
                            case "precoAlto":
                                return obj2.preco - obj1.preco                                                     
                            case "precoBaixo":
                                return obj1.preco - obj2.preco            
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
