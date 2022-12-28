import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const AddTask = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const handaleAddTask = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const mediaTask = {
                        title: data.title,
                        describtion: data.describtion,
                        image: imgData.data.url
                    }

                    //save database
                    fetch('http://localhost:5000/mediaTasks', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(mediaTask)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            alert(`Task added successfully.`);

                        })


                }
            })
    }



    return (
        <div className='mt-5 form-body container'>
            <h1>Add task</h1>

            <Form onSubmit={handleSubmit(handaleAddTask)}
                className="w-50 border p-3 rounded mt-5"
            >
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Type your title" {...register("title", { required: "Title is required" })} />
                    {errors.title && <p className='text-danger fw-bold'>{errors.title?.message}</p>}
                </Form.Group>

                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" {...register("image", { required: "Image is required" })} />
                    {errors.image && <p className='text-danger fw-bold'>{errors.image?.message}</p>}
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Task</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Add discribtion"
                        {...register("describtion", { required: "Describtion is required" })}
                    />
                    {errors.describtion && <p className='text-danger fw-bold'>{errors.describtion?.message}</p>}
                </Form.Group>
                <Button variant="success" type="submit">
                    Add Task
                </Button>
            </Form>
        </div>

    );
};

export default AddTask;