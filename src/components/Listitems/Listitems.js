import React from 'react'
import FlipMove from 'react-flip-move';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Trash } from 'react-bootstrap-icons';

function Listitems(props) {
    const listItems = props.items.todoItems.slice(0).reverse().map(items => {
        return <Card className="listTask" key={ items.key }>
            <Card.Body className="taskText">
                <Row>
                    <Col xs={10}>{items.text}</Col>
                    <Col xs={1} className="userIcon" onClick={() => props.items.DeleteTask(items.key)} ><Trash/></Col>
                    <Col xs={1}></Col>
                </Row>
            </Card.Body>
        </Card>
    });

    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default Listitems;
