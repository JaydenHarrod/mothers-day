import React from 'react';
import styled from 'styled-components';

const Rent = () => {
  const Title = styled.h1`
    text-align: center;
    font-family: sans-serif;
    margin-top: 32px;
    margin-bottom: 32px;
  `;
  const Image = styled.img`
    width: 100%;
  `;
  return (
    <div>
      <Title>4 Weeks Free Rent</Title>
      <Image src="http://www.comprehensivefinancial.com.au/ausdollar.png" alt="Australian Money" />
    </div>
  );
};

export default Rent;
