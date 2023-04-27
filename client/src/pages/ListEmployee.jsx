import React, { useEffect, useState } from 'react';
import { getListEmployee } from '../api/Employee';
import {Button, Container, Row, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from '../components/Header';
import { Link, useParams } from 'react-router-dom';
import CreateTask from './CreateTask';
import ListTask from './ListTask';
import ListPersonalTask from './ListPersonalTask';
const ListEmployee = () => {
    const user = useParams().account
    const [list,setList] = useState([]);
    const loadData = async () => {
        return await getListEmployee().then((res)=>setList(res))
    }
    useEffect(()=>{
        loadData()
    },[])

    // const deleteEmpl = (id) => {
    //     deleteEmployee(id)
    //     // setList((list) => list.filter((lst) => lst.id !== id))
    // }
    return (
        <>
            <HeaderComponent />
            <Row><h1 className='text-center'>Employee List</h1></Row>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link to={{pathname:`../${user}/updateEmployee/${employee.id}`}}><Button>Update</Button></Link>
                                    </td>
                                    <td>
                                        <CreateTask idEmployee = {employee.id}/> 
                                    </td>
                                    <td>
                                        {/* <Link to={{pathname:`../tasks/${employee.id}`}}><Button>View Tasks</Button></Link> */}
                                        <ListPersonalTask id={employee.id}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Link to={{pathname:`../${user}/createEmployee`}}> <Button>Create Employee</Button></Link>
                <Link to={{pathname:`../${user}/tasks`}}> <Button>View All Tasks</Button></Link>
            </Container>
        </>
    );
};

export default ListEmployee;