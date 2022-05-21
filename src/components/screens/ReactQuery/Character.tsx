import * as React from 'react';

import classes from './Character.module.css';

export interface ICharacter {
  status: React.ReactNode
  name: string
  id: number
  image: string
  species: string
  location: {
    name: string
  }
}

interface IProps {
  character: ICharacter
}

export const Character: React.FC<IProps> = ({ character }) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={character.image} alt="Character" />
      <div className={classes.textContainer}>
        <h3>{character.name}</h3>
        <p className={classes.status}>
          {character.status} - {character.species}
        </p>
        <p className={classes.title}>Last seen on {character.location.name}</p>
      </div>
    </div>
  )
}
