import React from "react";
import styled from "styled-components";

const Borda = styled.div`
  border: 1px solid black;
  width: 20%;
  height: 600px;
  padding: 0 10px;
`;
const Titulo = styled.h1`
  color: red;
`;

class Filtros extends React.Component {
  render() {
    return (
      <Borda>
        <h3>FILTRO</h3>
        <div>
          Valor mínimo
          <div>
            <input
              placeholder="0"
              type="number"
              onChange={this.props.onChangeNumberMin}
              value={this.props.numberFiltroMinimo}
            ></input>
          </div>
        </div>
        <div>
          Valor máximo
          <div>
            <input
              placeholder="1500000"
              type="number"
              onChange={this.props.onChangeNumberMax}
              value={this.props.numberFiltroMaximo}
            ></input>
          </div>
        </div>
        <div>
          Busca por nome
          <div>
            <input
              placeholder="Nave star wars"
              type="text"
              onChange={this.props.onChangeText}
              value={this.props.textFiltro}
            ></input>
          </div>
        </div>
      </Borda>
    );
  }
}
export default Filtros;
