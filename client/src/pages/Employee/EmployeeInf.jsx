import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Form, Table } from 'react-bootstrap';
import { getListTasksById } from '../../api/Task';
import { getEmployeeById } from '../../api/Employee';
import HeaderComponent from '../../components/Header';

const EmployeeInf = () => {
    const state = useLocation().state
    const [tasks, setTasks] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        getEmployeeById(state.id).then(res => setData(res)).catch(err => console.log(err))
    },[])
    useEffect(() => {
        getListTasksById(state.id).then(res => setTasks(res.data)).catch(err => console.log(err))
    },[])
    const row = tasks.map((task,index) => (
        <tr key={index}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
            <td>{task.managerName}</td>
        </tr>
    )) 
    return (
        <>
            <HeaderComponent />
        <Container>
            <h1 className='text-center'>Personal Information</h1>
            <Form>
                <Form.Group>
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type='text'  value={data.firstName} disabled/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>LastName</Form.Label>
                    <Form.Control type='text'  value={data.lastName} disabled/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'  value={data.email} disabled/>
                </Form.Group>
            </Form>
            <h1 className='text-center'>Task</h1>
            <Table>
                <thead>
                    <tr>
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

export default EmployeeInf;