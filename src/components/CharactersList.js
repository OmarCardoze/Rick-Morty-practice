import React from 'react'
import styled from 'styled-components'

export const CharactersList = ({ id, image, name, species, status, origin }) => {

    styled.body`
        background-color: tomato;
    `;

    const Card = styled.div`
    width: 300px;
    background: #333;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 11px 10px 19px -9px rgba(161,161,161,0.75);
`;

    const Image = styled.img`
    width: 100%;
    display: block;
`;

    const CardInfo = styled.div`
    padding: 5px 10px;
`;

    const CardTitle = styled.h2`
        color: #fff;
`;
    /**
     * 
     * const InfoButton = styled.button`
        padding: 5px;
        background-color: green;
        color: #fff;
        border-style: none;
        border-radius: 4px;
        outline-style: none;
        cursor: pointer;
    `;
    
     */

    const TextInfo = styled.p`
    color: #fff;
`;


    return (
        <Card key={id}>
            <Image src={image} alt={name} />
            <div>
                <CardInfo>
                    <CardTitle>{name} {status === 'Alive' ? <span>&#128154;</span> : <span>&#128420;</span>} </CardTitle>
                    <TextInfo>Specie: {species}</TextInfo>
                    <TextInfo>Origin: {origin.name}</TextInfo>
                </CardInfo>
            </div>
        </Card>
    )
}
