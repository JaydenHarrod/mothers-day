// TODO: Remove this component if AB test fails for ticket [GROW-1008]
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RefWrapper from './ref-wrapper';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
 
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
 
  handleOpenModal() {
    this.setState({ showModal: true });
  }
 
  handleCloseModal() {
    this.setState({ showModal: false });
  }
 
  render() {
    const { showModal } = this.state;
    const ModalOverlay = styled.div`
      z-index: 1000;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.65);
      position: fixed;
    `;
    const ModalOpen = styled.div`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border-radius: 4px;
      z-index: 1010;
      max-width: 100%;
      width: 500px;
      height: 500px;
      max-height: 100%;
      text-align: left;
      overflow: hidden;
      padding: 1em;
      box-shadow: 3px 3px 6px rgba(00, 00, 00, 0.3);
      @media (max-width: 544px) {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
      }
    `;
    const Button = styled.button`
      width: 250px;
      height: 250px;
      color: #000;
      border: 1px solid #ccc;
      text-align: center;
      padding: 18px;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        background: rgba(0,0,0,0.1);
      }
    `;
 
    const { openText, children } = this.props;
    return (
      <div>
        {showModal ? (
          <ModalOverlay>
            <RefWrapper onClick={this.handleCloseModal}>
              <ModalOpen>
                {children}
              </ModalOpen>
            </RefWrapper>
          </ModalOverlay>
        ) : (
          <Button onClick={this.handleOpenModal} role="Button" aria-label="Enter modal view">
            {openText}
          </Button>
        )}
      </div>
    );
  }
}
 
Modal.propTypes = {
  openText: PropTypes.string,
  children: PropTypes.node
};
 
export default Modal;
