import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handaleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Hi-task</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">

                            <Nav.Link className='text-light'>Add Task</Nav.Link>
                            <Nav.Link className='text-light' >My Task</Nav.Link>
                            <Nav.Link className='text-light'>Completed Tasks</Nav.Link>

                        </Nav>
                        <Nav >
                            {
                                user?.uid ? <Link onClick={handaleLogOut} className='text-light mx-2 fw-bold'>Log Out</Link>
                                    :
                                    <>
                                        <Link className='text-light mx-2 fw-bold' to='/login'>Login</Link>
                                        <Link className='text-light mx-2 fw-bold' to='/register'>Register</Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;