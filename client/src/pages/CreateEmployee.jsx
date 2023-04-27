import React, { useState } from 'react';
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import HeaderComponent from '../components/Header';
import { createEmployee } from '../api/Employee';
import { useNavigate, useParams } from 'react-router-dom';

const CreateEmployee = () => {
    const [state, setState] = useState({
        firstName:"",
        lastName:"",
        email:""
    });
    const navigate = useNavigate()
    const handleSubmit = () => {
        createEmployee(state).then((res) => {
            if(res.status === 200){
                navigate(-1)
            }
        })
        // return navigate("/employee");
    }
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

export default CreateEmployee;