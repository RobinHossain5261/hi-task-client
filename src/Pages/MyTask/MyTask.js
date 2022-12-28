import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../contexts/AuthProvider';
import Button from 'react-bootstrap/Button';

const MyTask = () => {

    const { user } = useContext(AuthContext);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myTasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user?.email])

    return (
        <div className='form-body container mt-5'>
            <h2>My Task</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Task</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks?.map((task, i) =>
                            <tr
                                key={task._id}
                            >
                                <td>{i + 1}</td>
                                <td>{task.task}</td>
                                <td><Button variant="warning">Update</Button>{' '}</td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyTask;