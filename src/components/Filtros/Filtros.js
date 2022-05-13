import React from "react";
import styled from "styled-components";
import {

  Borda,
  Titulo,

} from "../Styles/Styles";

class Filtros extends React.Component {
  render() {    
    return (
      <Borda>
        <Titulo>FILTRO</Titulo>
        
        <div>
          Valor mínimo
          <div>
            <input
              placeholder="67000"
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
              placeholder="1370000"
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
              placeholder="Death Star"
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