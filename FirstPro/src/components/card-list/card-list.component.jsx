import React from 'react';
import './card-list.style.css';
import { Cardapp } from '../cardapp/cardapp.component'
import {  Row } from 'react-bootstrap';

export const CardList = (props) => {
    return (
        
            <Row>
                {props.monster.map(monster =>
                        <Cardapp key={monster.id} monster={monster}/> )
                }
            </Row>
      



    )
}