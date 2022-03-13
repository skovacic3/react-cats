import React, { useEffect, useState } from "react";
import { CatList } from "../components/CatList";
import { Spinner, Container } from "react-bootstrap";
import styled from 'styled-components';
import { Navigation } from "../components/Navigation";
import apiKey from '../config.json';

const SpinnerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const Search = styled.input`
    display: block;
    padding: 0.375 rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 0 0 16px 0;
`;


export const Main = () => {
  const [cats, setCats] = useState([]);
  const [catsToShow, setCatsToShow] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
        method: 'GET',
        headers: {
            "x-api-key": apiKey
        }
      })
      .then(res => res.json())
      .then(data => {
          setCats(data);
          setCatsToShow(data);
      });
  }, []);

  const searchFilter = e => {
    setCatsToShow(cats.filter(cat => cat.name.toLowerCase().includes(e.target.value.toLowerCase()) || cat.origin.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <div>
        <Navigation />
        <Container>
            {catsToShow.length ? <Search placeholder="Search..." onChange={searchFilter} /> : null}
            {catsToShow.length ? <CatList cats={catsToShow} /> : <SpinnerContainer><Spinner animation="border" /></SpinnerContainer>}
        </Container>
    </div>

  );
}
