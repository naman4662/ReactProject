import React from 'react';
import { Card, Col } from 'react-bootstrap';

export const Cardapp = (props) => {
    return (
        <Col lg={3}>
            <Card className="card-list">
                <Card.Img variant="top" src={`https://robohash.org/${props.monster.id}?set=set2&size=140x140`} />
                <Card.Body>
                    <Card.Text className="card-name">{props.monster.name}</Card.Text>
                    <p>{props.monster.email}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}
