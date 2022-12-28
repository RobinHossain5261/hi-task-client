import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = () => {

    const [selected, setSelected] = useState(new Date());
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
                    <Form className='w-lg-50 border p-3 rounded'>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Selected Date</Form.Label>
                            <Form.Control type="text" value={format(selected, 'PP')} disabled />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Type your title" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Task</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Add discribtion" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Home;