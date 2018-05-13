import React from 'react';
import styled from 'styled-components';

const Holiday = () => {
  const Title = styled.h1`
    text-align: center;
    font-family: sans-serif;
    margin-top: 32px;
    margin-bottom: 32px;
  `;
  const Image = styled.img`
    width: 100%;
  `;
  const Link = styled.a`
    color: #000;
    font-size: 24px;
  `;
  return (
    <div>
      <Title>Hawks Nest Weekend Holiday</Title>
      <a href="https://www.airbnb.com.au/rooms/17591509" target="_blank" rel="noopener noreferrer">
      <Image
        src="https://a0.muscache.com/im/pictures/f8ed2dbb-6ac2-4788-98ba-78ff7a9943f9.jpg?aki_policy=x_large"
        alt="AirBnb"
      />
      </a>
      <center>
        <Link href="https://www.airbnb.com.au/rooms/17591509" target="_blank" rel="noopener noreferrer">
          Explore the AirBnb!
        </Link>
      </center>
    </div>
  );
};

export default Holiday;
