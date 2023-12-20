import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

//import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container className="Login" style={{
        width:'100%',
        height:'100%',
        alignItems: 'center',
        display: 'flex',
        flexdirection:'column',
        width:'100%',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent:'center'
    }}>
      <Form onSubmit={handleSubmit}
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center'
      }}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>

          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button 
        style={{
            marginTop:'15px',
            backgroundColor: 'blue',
            alignSelf: 'center'
        }}
        block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
export default Login;