import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import { getListTasks, getListTasksById, searchTask } from '../api/Task';
import { useParams } from 'react-router-dom';
import HeaderComponent from '../components/Header';

const ListTask = () => {
    const id = useParams().id
    const [tasks, setTasks] = useState([]);
    const [query, setQuery] = useState("");
    const getData = async () => {
        return await searchTask(query).then(res => setTasks(res.data)).catch(err => console.log(err))
    }
    useEffect(() => {
        getData();
    },[query])
    console.log(tasks)
    const row = tasks.map((task,index) => (
        <tr key={index}>
            <td>{task.employeeId}</td>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
            <td>{task.managerName}</td>
        </tr>
    )) 

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <>
        <HeaderComponent />
        <Row><h1 className='text-center'>Employee List</h1></Row>
            <Container>
            <Form>
                <Form.Control type='text' onChange={handleChange}></Form.Control>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Manager Name</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </Table>
            </Container>
        </>
    );
};

export default ListTask;