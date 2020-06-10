import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signInWithGoogle, auth } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleEmail = e => {
        setEmail(e.target.value);
    }
    const HandlePassword = e => {
        setPassword(e.target.value);
    }
    
    const HandleSignIn = e => {
        e.preventDefault();

        console.log(email, password);

        setEmail('');
        setPassword('');
    }
    return (
        <div style={{marginTop: '40px'}}>
            <Form onSubmit={HandleSignIn}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                        type="email"   
                        placeholder="Enter Email" 
                        value={email}
                        onChange={HandleEmail}
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password}
                        onChange={HandlePassword}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div>
                    <Button variant="primary" type="submit" style={{marginRight: '2px'}}>
                        Submit
                    </Button>
                    <Button variant="primary" type="submit" onClick={signInWithGoogle} style={{marginLeft: '2px'}}>
                        Sign In With Google
                    </Button>
                </div>
        </Form>
        
        </div>
    );
}
 
export default SignIn;