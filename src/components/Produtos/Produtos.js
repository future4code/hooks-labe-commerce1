import React from "react";
import styled from 'styled-components'

const Borda = styled.div`
    border: 1px solid black;
    width: 55%;
    height: 600px;
    padding: 0 10px;
`

class Produtos extends React.Component{
    render(){
        return(
            <Borda>
                <h1>PRODUTOS</h1>
            </Borda>
        );
    }
}
export default Produtos