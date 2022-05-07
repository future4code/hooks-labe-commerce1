import React from "react";
import styled from 'styled-components'

const Borda = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 600px;
`

class Carrinho extends React.Component{
    render(){
        return(
            <Borda>
                <h1>CARRINHO</h1>
            </Borda>
        );
    }
}
export default Carrinho