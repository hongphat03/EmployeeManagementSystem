import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import HeaderComponent from '../components/Header';
import { getEmployeeById, updateEmployee } from '../api/Employee';
import { redirect, useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        firstName:"",
        lastName:"",
        email:""
    });
    const {id} = useParams()
    const loadData = async () => {
        return await getEmployeeById(id).then((res)=>setState(res))
    }
    useEffect(()=>{
        loadData()
    },[])
    // const updateData = async () => {
    //     return await updateEmployee(id,state).then(res => {
    //         if(res.status === 200){
    //             navigate(-1)
    //         }
    //     })
    // }
    const handleSubmit = () => {
        updateEmployee(id,state);
        navigate(-1)
        }
        // window.location.replace('http://localhost:3000/employee');
        // return navigate("/employee");
    return (
        <>
            <HeaderComponent />
            <h1 className="text-center">Add Employee</h1>
            <Container>
                <Form>
                    <FormGroup>
                        <FormLabel>FirstName</FormLabel>
                        <FormControl type='text' onChange={((e) => setState((prev)=>({...prev,firstName:e.target.value})))} value={state.firstName}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>LastName</FormLabel>
                        <FormControl type='text' onChange={((e) => setState((prev) => ({...prev,lastName:e.target.value})))} value={state.lastName}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' onChange={((e) => setState((prev) => ({...prev,email:e.target.value})))} value={state.email}/>
                    </FormGroup>
                    <Button onClick={handleSubmit} className='my-2'> Submit </Button>
                </Form>
            </Container>
        </>
    );
};

export default UpdateEmployee;