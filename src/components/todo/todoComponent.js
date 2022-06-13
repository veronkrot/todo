import Card from 'react-bootstrap/Card';

function TodoComponent(todo) {
    return(
        <Card>
            <Card.Body>{todo}</Card.Body>
        </Card>
    )
}

export default TodoComponent;
