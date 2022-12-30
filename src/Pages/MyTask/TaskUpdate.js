import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLoaderData, useNavigate } from 'react-router-dom';

const TaskUpdate = () => {

    const navigate = useNavigate();
    const storedTask = useLoaderData();

    const handaleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;

        const describtion = { task };
        // console.log(describtion);

        fetch(`https://hi-task-server.vercel.app/myTasks/${storedTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(describtion)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Task updated.');
                    navigate('/mytask');
                }
            })




    }

    return (
        <div className='form-body container mt-5 w-50'>
            <h1>Please update your task</h1>
            <Form onSubmit={handaleSubmit} className='w-lg-50 border p-3 mt-3 rounded'>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Task</Form.Label>
                    <Form.Control name='task' type="text" defaultValue={storedTask.task} />
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-3'>
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default TaskUpdate;