import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../contexts/AuthProvider';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MyTask = () => {

    const { user } = useContext(AuthContext);

    const [tasks, setTasks] = useState([]);

    // const { data: tasks = [], refetch } = useQuery({
    //     queryKey: ['tasks'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch(`http://localhost:5000/myTasks?email=${user?.email}`)
    //             const data = await res.json();
    //             return data;
    //         }
    //         catch (error) {
    //         }
    //     }
    // })


    useEffect(() => {
        fetch(`http://localhost:5000/myTasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user?.email])

    const handaleDelete = task => {

        const agree = window.confirm('Are you sure want to delete?');

        if (agree) {
            // console.log('Deleting id', task._id)
            fetch(`http://localhost:5000/myTasks/${task._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Task delete successfully.');
                    }
                })
        }


    }

    return (
        <div className='form-body container mt-5'>
            <h2>My Task</h2>
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Task</th>
                        <th>Action</th>
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
                                <td>
                                    <Link to={`/mytask/${task._id}`}>
                                        <Button variant="warning">Update</Button>{' '}
                                    </Link>
                                </td>

                                <td>
                                    <Button onClick={() => handaleDelete(task)} variant="danger">Delete</Button>{' '}
                                </td>
                                <td>
                                    <Button variant="success">Completed</Button>{' '}
                                </td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyTask;