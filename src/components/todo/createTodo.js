import CreateModal from "./createModal";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateTodo = () => {
    const [show, setShow] = useState(false);
    const [todo, setTodo] = useState('');

    const handleClose = () => {
        setShow(false);

    }
    const handleShow = () => setShow(true);

    const onTextChange = (e) => {
        setTodo(e.target.value);
    }

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(todo);
        setShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="todo">
                            <Form.Label>Enter todo</Form.Label>
                            <Form.Control type="text" placeholder="Enter todo" onChange={onTextChange} value={todo}/>
                            <Form.Text className="text-muted">
                                Enter todo
                            </Form.Text>s
                        </Form.Group>

                        <Button variant="secondary">Close</Button>
                        <Button variant="primary" type="submit" onClick={handleCreate}>
                            Create
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateTodo;
