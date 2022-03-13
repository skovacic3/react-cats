import React from 'react'
import image from '../images/404.jpeg'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Navigation } from '../components/Navigation';

export const Error = () => {
  return (
    <div>
    <Navigation catInfo={true} />
    <Container>
        <img src={image} alt="errorImage" />
    </Container>
    </div>
  )
}
