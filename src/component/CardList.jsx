
import React from 'react';



import './Cardlist.css';
import { Card } from './CardComponent';

export const CardList = (props) => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);

