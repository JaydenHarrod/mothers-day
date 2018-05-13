import React, { Component } from 'react';
import Modal from '../utils/modal';
import styled from 'styled-components';
import Massage from './Massage';
import Rent from './Rent';
import Holiday from './Holiday';

class App extends Component {
  render() {
    const Container = styled.div`
      width: 900px;
      margin: auto;
    `;
    const Title = styled.h1`
      text-align: center;
      font-family: sans-serif;
      margin-top: 32px;
      margin-bottom: 32px;
    `;
    const ModalContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
      flex-wrap: wrap;
    `;
    return (
      <Container>
        <Title>Happy Mothers Day! 🎉</Title>
        <ModalContainer>
          <Modal openText="Open Gift #1"><Massage /></Modal>
          <Modal openText="Open Gift #2"><Rent /></Modal>
          <Modal openText="Open Gift #3"><Holiday/></Modal>
        </ModalContainer>
      </Container>
    );
  }
}

export default App;
