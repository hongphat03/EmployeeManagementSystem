import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getListTasks, getListTasksById } from '../api/Task';

const ListPersonalTask = (props) => {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([]);
    const getData = async () => {
        return await getListTasksById(props.id).then(res => setTasks(res.data)).catch(err => console.log(err))
    }
    useEffect(() => {
        getData();
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
            <Button onClick={() => setShow(true)}>View Tasks</Button>
            <Modal show={show} onHide={()=>setShow(false)} centered>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ListPersonalTask;