import React from 'react';
import { Form ,Button, Row} from 'react-bootstrap';
import { LoginForm } from './LoginForm';
export const NewAccount = () => {
    return ( 
        <div style={{marginLeft:'200px'}}>
        <Form>
                <h3>Sign Up</h3>

                <div>
                    <Form.Label>First name</Form.Label>
                    <input type="text" className="From-control" placeholder="First name" />
                </div>

                <div>
                    <Form.Label>Last name</Form.Label>
                    <input type="text" className="From-control" placeholder="Last name" />
                </div>

                <div >
                    <Form.Label>Email address</Form.Label>
                    <input type="email" className="From-control" placeholder="Enter email" />
                </div>

                <div >
                    <Form.Label>Password</Form.Label>
                    <input type="password" className="From-control" placeholder="Enter password" />
                </div>
                
                <Button type="submit" >Sign Up</Button>
                <p>
                    Already registered <a href="/LoginForm"onClick={LoginForm}>sign in?</a>
                </p>
                

            </Form>

            </div>
  );
}
 
