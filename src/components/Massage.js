import React from 'react';
import styled from 'styled-components';

const Massage = () => {
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
      <Title>Massage</Title>
      <Image src="https://img.grouponcdn.com/deal/SNHP9VeeD2qYv51MQ1u/Uz-960x576/v1/c700x420.jpg" alt="Massage" />
    </div>
  );
};

export default Massage;
