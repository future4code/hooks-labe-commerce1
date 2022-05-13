import React from "react";
import styled from 'styled-components'
import CardProduto from './CardProduto'

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
                    {this.props.produtos.sort((obj1,obj2) => {
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
            </Container>
        );
    }
}
export default Produtos;
