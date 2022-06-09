import React from 'react'
import styled from 'styled-components';

const StyledComponents = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: lightgray;
  `;

  return(
    <Wrapper>
      <Title>
        Hello Styled Component!
      </Title>
    </Wrapper>
  );
}

export default StyledComponents