import React from "react";
import styled from 'styled-components'

const Borda = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 600px;
    padding: 0 10px;
`

class Carrinho extends React.Component{
    render(){
        return(
            <Borda>
                <h2>Carrinho: </h2>
            </Borda>
        );
    }
}
export default Carrinho