import React from 'react'
import { CharactersList } from './CharactersList'

export const Characters = ({characters}) => {
    return (
        characters.map( ({id, image, name, species, status, origin}) => (
            <CharactersList
              key={id}
              id={id}
              image={image}
              name={name}
              species={species}
              status={status}
              origin={origin}
            />
          ))
    )
}
