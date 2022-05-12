import React from "react";
import styled from "styled-components";

const Borda = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 600px;
  padding: 0 10px;
`;
const Titulo = styled.h3`
  color: red;
`;

class Filtros extends React.Component {
  render() {    
    return (
      <Borda>
        <Titulo>FILTRO</Titulo>
        <div>
          Valor mínimo
          <div>
            <input
              placeholder="0"
              type="number"
              onChange={this.props.updateMinPrice}
              value={this.props.valorMinimo}
            ></input>
          </div>
        </div>
        <div>
          Valor máximo
          <div>
            <input
              placeholder="1500000"
              type="number"
              onChange={this.props.updateMaxPrice}
              value={this.props.valorMaximo}
            ></input>
          </div>
        </div>
        <div>
          Busca por nome
          <div>
            <input
              placeholder="Nave star wars"
              type="text"
              onChange={this.props.updateQuery}
              value={this.props.textQuery}
              ></input>                        
          </div>
        </div>        
      </Borda>
      
    );
  }
}
export default Filtros;