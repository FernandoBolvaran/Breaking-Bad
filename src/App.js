import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #ff8a33 0%,
    #ffce33 40%,
    #ecff33 100%
  );
  background-size: 400px;
  font-family: Arial, Helvetica, sans-serif;
  color: #000022;
  margin-top: 4rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #f2f2f2;
  border-radius: 50px;
  transition: background-size 0.3s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //State de frases
  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
    //consultar API a traves del metodo FETCH
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    obtenerFrase(frase[0]);
  };

  // cargar una frase automáticamente cuando el usuario ingrese, equivalente al componentDidMount()
  useEffect(() => {
    consultarAPI();
  }, []);
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener frase </Boton>
    </Contenedor>
  );
}

export default App;
