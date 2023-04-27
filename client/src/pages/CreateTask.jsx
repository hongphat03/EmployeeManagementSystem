import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { createTask } from '../api/Task';

const CreateTask = (props) => {
    const managerName = useParams();
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        // const name = e.target.name.value
        // const desc = e.target.desc.value
        // const dl = e.target.dl.value
        const task = {
            employeeId:props.idEmployee,
            managerName:managerName.account,
            name:e.target.name.value,
            description:e.target.desc.value,
            deadline:e.target.dl.value
        }
        console.log(task)
        createTask(task)
        setShow(false)
    }
    return (
        <>
            <Button onClick={() => setShow(true)}>Create Task</Button>
            <Modal show={show} onHide={()=>setShow(false)} centered>
                <Modal.Header>Create New Task</Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control id="name" type = 'text'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control id="desc" type = 'text'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control id="dl" type = 'date'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Save</Form.Label>
                            <Form.Control type = 'submit'/>
                        </Form.Group>
                    </form>
                    {/* <Button onClick={handleSubmit}>Save</Button> */}
                    <Button className='my-2 mx-2' onClick={() => setShow(false)}>Cancle</Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CreateTask;