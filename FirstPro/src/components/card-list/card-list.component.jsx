import React from 'react';
import './card-list.style.css';
import { Cardapp } from '../cardapp/cardapp.component'
import { Container, Row } from 'react-bootstrap';

export const CardList = (props) => {
    return (
        <Container>
            <Row>
                {props.monster.map(monster =>
                        <Cardapp key={monster.id} monster={monster}/> )
                }
            </Row>
        </Container>



    )
}