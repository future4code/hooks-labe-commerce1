import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
  margin: 2% 1%;
  border: 1px solid black;
  width: 15vw;
  height: 50vh;
  padding: 0 1%;
  background-color: rgb(70, 70, 70);
  box-shadow: 1px 1px 2px gray;
  border: 1px solid gray;
  border-radius: 10px;
`;
const Titulo = styled.h2`
  text-align: center;
  color: white;
`;
const TipoFiltro = styled.div`
  color: white;
  margin-top: 10%;
`
const Input = styled.input`
  padding: 3px;
  border-radius: 5px;
`

class Filtros extends React.Component {
  render() {    
    return (
      <Pagina>
        <Titulo>FILTROS</Titulo>

        <TipoFiltro>
          Valor mínimo
          <div>

            <Input
              placeholder="R$: 67000,00"

            <input
              placeholder="67000"

              type="number"
              onChange={this.props.updateMinPrice}
              value={this.props.valorMinimo}
            ></Input>
          </div>
        </TipoFiltro>

        <TipoFiltro>
          Valor máximo
          <div>

            <Input
              placeholder="R$: 137000,00"

            <input
              placeholder="1370000"

              type="number"
              onChange={this.props.updateMaxPrice}
              value={this.props.valorMaximo}
            ></Input>
          </div>
        </TipoFiltro>

        <TipoFiltro>
          Busca por nome
          <div>

            <Input

            <input

              placeholder="Death Star"
              type="text"
              onChange={this.props.updateQuery}
              value={this.props.textQuery}
              ></Input>                        
          </div>
        </TipoFiltro>        
      </Pagina>
      
    );
  }
}
export default Filtros;