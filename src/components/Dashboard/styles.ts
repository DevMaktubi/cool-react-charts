import styled from 'styled-components'



export const Container = styled.div`
  display: grid;

  width: 100%;
  height: 100vh;
  
  
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  padding: 1rem 2rem;
  gap: 5rem;

  justify-items: center;
  align-items: start;

  align-content: center;

`

export const ChartDiv = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 1%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }
`

