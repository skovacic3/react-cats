import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { CatInfo } from "../components/CatInfo";
import { Spinner, Container } from "react-bootstrap";
import { Error } from "./Error";
import styled from "styled-components";
import { Navigation } from "../components/Navigation";
import apiKey from '../config.json';

const SpinnerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 24px;
`

export const Cat = () => {
    const [cat, setCat] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const params = useParams();

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${params.catId}`, {
            method: 'GET',
            headers: {
                "x-api-key": apiKey
            }
          })
          .then(res => res.json())
          .then(data => {
              setCat(data[0]["breeds"][0]);
              setLoading(false);
          })
          .catch(() => {
              setError(true);
              setLoading(false);
          });
      }, [])

    return (
        <div>
            <Navigation catInfo={true} />
            <Container>
                {cat ? <CatInfo cat={cat} /> : null}
                {loading && <SpinnerContainer><Spinner animation="border" /></SpinnerContainer>}
                {error && <Error />}
            </Container>
        </div>
    );
}
