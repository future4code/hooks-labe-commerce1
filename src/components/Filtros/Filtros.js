import React from "react";
import styled from "styled-components";

const Borda = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 600px;
    padding: 0 10px;
`
const Titulo = styled.h1 `
    color: red;
`

class Filtros extends React.Component{
    render(){
        return(
            <Borda>
                <h1>FILTRO</h1>
            </Borda>
        );
    }
}
export default Filtros;