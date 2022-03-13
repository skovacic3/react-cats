import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const Navigation = ({ catInfo = false }) => {
  return (
    <Navbar bg="light">
        <Container style={{ justifyContent: "flex-start" }}>
            <Navbar.Brand href="/">React cats</Navbar.Brand>
            {catInfo && <Nav.Link href="/">Home</Nav.Link>}
        </Container>
    </Navbar>
  )
}
