import styled from "styled-components";

// App.js

export const Pagina = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgb(1,0,24);
background: linear-gradient(304deg, rgba(1,0,24,1) 0%, rgba(0,0,0,1) 100%, rgba(0,249,255,1) 100%);
  color: cornflowerblue;
  justify-content: space-evenly;  
  `;

// Filtros.js

export const Borda = styled.div`
/* background-color: black; */
/* border: 1px solid black; */
/* height: 100%; */
/* color: blueviolet; */
`;

export const Titulo = styled.h3`
  color: red;
  display: flex;
justify-content: center;
  `;

// CardProdutos.js

export const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #575e5e;
`;
export const ImagemProduto = styled.img`
    width: auto;
    height: 9vw;
    margin: 10px;
`;

export const BotaoAdd = styled.button`
    margin: 10px;
`;

export const Creditos = styled.p`
 color: #c9fff5;
`;

// Produtos.js

export const Container= styled.div`
width: 65vw;
/* padding-top: 15px; */
`;

export const DisplayProdutos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
row-gap: 10px;
column-gap: 10px;
`;


export const Ordenacao = styled.div`
display: flex;
/* justify-content: center; */
/* flex-direction: row; */
justify-content: space-between;
padding-left: 29vw;
padding-right: 2.7vw;
align-items: center;
`;

export const H2 = styled.h2`
color: red;
`;

// Carrinho.js

export const H3carrinho = styled.h3`
display: flex;
justify-content: center;
  color: red;
  `;

export const BlocoCarrinho = styled.div`
  /* width: 10vw; */
  height: 100%;
  /* margin-top: 20px; */
  /* border: 1px solid black; */
  padding: 0 10px;
  /* border-radius: 5px; */
  `;

export const Itens = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
  align-items:center;
  `;

export const BotaoRemover = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  /* padding: 3px; */
`;

  export const TotalCreditos = styled.div`
    display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items:center;
  color:#4d12d5;
  `


