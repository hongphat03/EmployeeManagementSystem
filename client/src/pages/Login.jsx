import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { loginAsEmployee } from '../api/Employee';
import { useNavigate } from 'react-router-dom';
import { loginAsManager } from '../api/Manager';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass,setPass] = useState("");
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePass = (e) => {
        setPass(e.target.value)
    }
    const handleSubmit = () => {
        if(email.length === 0){
            alert("Username must not empty")
        }
        else if(pass.length < 8){
            alert("Password must have minimun 8 characters")
        }
        else{
            loginAsEmployee({
                "email":email,
                "password":pass
            }).then(res => {
                if(res.data.id > 0){
                    navigate(`/infor`,{state:res.data})
                }
                else {
                    loginAsManager({
                        "email":email,
                        "password":pass
                    }).then((res) => {
                        if(res.data.id > 0){
                            navigate(`${res.data.name}/employee`)
                        }
                    })
                }
            })
        }
    }
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' onChange={changeEmail}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' onChange={changePass}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type = 'button' onClick={handleSubmit} value='Login' />
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type = 'button' onClick={handleSubmit} value='Register' />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;