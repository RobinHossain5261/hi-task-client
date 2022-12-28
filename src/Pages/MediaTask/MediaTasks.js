import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MediaTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/mediaTasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    return (
        <div className='form-body container mt-5'>
            <h2>All Media Tasks: {tasks.length}</h2>
            <div className='mt-2 row gx-5 gy-5'>
                {
                    tasks.map(task =>
                        <Card className='col-lg-4'>
                            <Card.Img style={{ height: '18rem', width: 'fluid' }} variant="top" src={task.image} />
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Text>
                                    {task.describtion}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default MediaTasks;