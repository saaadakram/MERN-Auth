import React from 'react'
import { useState } from 'react'
import {Link } from "react-router-dom"
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../componets/FormContainer'

const RegisterScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confrimPassword, setConfirmPassword] = useState("")
    
const submitHandler = async(e)=>{
e.preventDefault()
console.log("submit")
}

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={submitHandler}>

        <Form.Group className='my-2' controlId='name'>
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control
                    type = "text"
                    placeholder = "Enter your name"
                    value= {name}
                    onChange = {(e)=> setName(e.target.value)}>
                </Form.Control>

            </Form.Group>
            <Form.Group className='my-2' controlId='email'>
                <Form.Label>
                    Email Address
                </Form.Label>
                <Form.Control
                    type = "email"
                    placeholder = "Enter your email"
                    value= {email}
                    onChange = {(e)=> setEmail(e.target.value)}>
                </Form.Control>

            </Form.Group>

            <Form.Group className='my-2' controlId='password'>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control
                    type = "password"
                    placeholder = "Enter your password"
                    value= {password}
                    onChange = {(e)=> setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='confirmPassword'>
                <Form.Label>
                    Confirm Password
                </Form.Label>
                <Form.Control
                    type = "password"
                    placeholder = "Confrimyour password"
                    value= {confrimPassword}
                    onChange = {(e)=> setConfirmPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
                Sign Up
            </Button>
            <Row className='py-3'>
                <Col>
                Already have an account?<Link to = "/login">Login</Link>
                </Col>
            </Row>

        </Form>

    </FormContainer>
  )
}

export default RegisterScreen