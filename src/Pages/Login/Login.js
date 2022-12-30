import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const { signIn, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => console.log(error))
    }

    const handaleGoogleSignIn = () => {
        googleLogIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='form-body d-flex justify-content-center align-items-center'>
            <div className='w-25 h-25 container border p-3 mt-5 mb-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                <h3 className='text-center'>Please Login</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='w-100'>
                        LOGIN
                    </Button>

                </Form>
                <Button onClick={handaleGoogleSignIn} variant="secondary" type="submit" className='w-100 mt-3'>
                    CONTINUE WITH GOOGLE
                </Button>
            </div>
        </div>
    );
};

export default Login;