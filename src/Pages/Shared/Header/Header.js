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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Link to='/' className='text-light text-decoration-none me-3 fw-bold'><h3>H<span className='text-danger'>i-task</span></h3></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">

                            <Link to='/addtask' className='text-light text-decoration-none me-3'>Add-Task</Link>
                            <Link className='text-light text-decoration-none me-3'>My-Task</Link>
                            <Link className='text-light text-decoration-none me-3'>Completed-Tasks</Link>
                            <Link to='/mediatask' className='text-light text-decoration-none me-3'>Media-Tasks</Link>

                        </Nav>
                        <Nav >
                            {
                                user?.uid ? <Link onClick={handaleLogOut} className='text-light text-decoration-none fw-bold'>LogOut</Link>
                                    :
                                    <>
                                        <Link className='text-light text-decoration-none me-3 fw-bold' to='/login'>Login</Link>
                                        <Link className='text-light text-decoration-none me-3 fw-bold' to='/register'>Register</Link>
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