import React from 'react'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`;

const Title = styled.h1`
    margin-bottom: 16px;
`;

const TextBlock = styled.div`
    margin: 16px 0;
    width: 100%;
`;

const SubTitle = styled.h3`
    text-align: left;
`;

const Description = styled.p`
    padding: 16px 0;
`;

const Image = styled.img``;

export const CatInfo = ({ cat }) => {
    return (
        <Container>
            <InnerContainer>
                <Title>{cat.name}</Title>
                <Image src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}/>
                <TextBlock>
                    <SubTitle>Description</SubTitle>
                    <Description>{cat.description}</Description>
                </TextBlock>
                <TextBlock>
                    <SubTitle>Temperament</SubTitle>
                    <Description>{cat.temperament}</Description>
                </TextBlock>
                <TextBlock>
                    <SubTitle>Stats</SubTitle>
                    <Description>Adaptability: {cat.adaptability}/5</Description>
                    <Description>Affection level: {cat.affection_level}/5</Description>
                    <Description>Child friendly: {cat.child_friendly}/5</Description>
                    <Description>Hypoallergenic: {cat.hypoallergenic ? 'Yes' : 'No'}</Description>
                </TextBlock>
            </InnerContainer>
        </Container>
    )
}
