import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Characters } from './components/Characters'
import { PageCounter } from './hooks/pageCounter'
import MyLoader from './loader/Loader'

function App() {

  const [characters, setCharacters] = useState([]);
  const { Page, Anterior, Siguiente } = PageCounter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consulta = async () => {
      const r = await axios.get(`https://rickandmortyapi.com/api/character/?page=${Page}`)
      console.log(r);
      setCharacters(r.data.results);
      setLoading(true)
    }
    consulta()
    setLoading(false)
  }, [Page])

  console.log('Pag', Page)

  const Wrapper = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
`;

  const WrapperContent = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    scroll-behavior: smooth;
`;

  const Title = styled.h1`
    font-size: 3.5em;
    text-align: center;
    color: palevioletred;
`;
  const ButtonBack = styled.button`
width: 200px;
background-color: transparent;
border: 4px solid #fff;
cursor: pointer;
line-height: 1.2;
visibility: ${Page === 1 ? 'hidden' : 'visible'};
padding: 10px;
margin: 4px;
color: #fff;

&:hover {
  background-color: #fff;
  color: #000;
}
`;

  const ButtonNext = styled.button`
width: 200px;
background-color: transparent;
border: 4px solid #fff;
cursor: pointer;
line-height: 1.2;
padding: 10px;
margin: 4px;
color: #fff;

&:hover {
  background-color: #fff;
  color: #000;
}
`;


  console.log('Main run!')

  return (
    <Wrapper>
      <Title>Rick&Morty</Title>

      <WrapperContent>
        {
          loading === false ? (
            <MyLoader />
          ) : (
              <Characters
                characters={characters}
              />
            )
        }


      </WrapperContent>

      <div>
        <ButtonBack onClick={Anterior}>&#129152; Anterior</ButtonBack>
        <ButtonNext onClick={Siguiente}>Siguiente &#129154;</ButtonNext>
      </div>
    </Wrapper>
  );
}

export default App;

