import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider';


const Home = () => {
    const { user } = useContext(AuthContext);
    const [selected, setSelected] = useState(new Date());
    const [updated, setUpdated] = useState('');


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setUpdated(event.target.value);
        }
    };

    const handaleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const email = user?.email;

        const describtion = { task, email };

        fetch('http://localhost:5000/myTasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(describtion)
        })
            .then(res => res.json())
            .then(result => {
                alert(`Task added successfully.`);
                form.reset();

            })
    }

    return (
        <div className='row gx-5 form-body '>
            <div className='col-lg-6 d-flex justify-content-end mt-5'>
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                />
            </div>
            <div className='col-lg-6 mt-5 d-flex justify-content-start'>
                <div>
                    <h1>Please write your task</h1>
                    <Form onSubmit={handaleSubmit} className='w-lg-50 border p-3 mt-3 rounded'>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task</Form.Label>
                            <Form.Control name='task' type="text" placeholder="Type your task" onKeyDown={handleKeyDown} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Home;