
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {  Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const EditPost = ({ result }) => {
    const [form, setForm] = useState({title: result.title,descrption: result.descrption });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updatePost();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updatePost = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/createpost/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/post");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'title is required';
        }
        if (!form.descrption) {
            err.descrption = 'descrption is required';
        }
        return err;
    }

    return (
        <div className="form-container">
            <h1>Update Post</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit} className="container-Form">
                            <Form.Input
                                fluid
                                error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                label='title'
                                placeholder='title'
                                name='title'
                                value={form.title}
                                onChange={handleChange}
                            />
                            <TextareaAutosize
                                error={errors.descrption ? { content: 'Please enter a descrption', pointing: 'up' } : null}
                                label="descrption"
                                minRows={25}
                                name='descrption'
                                value={form.descrption}
                                onChange={handleChange}                                                                            
                                placeholder="descrption"
                                style={{ width: 400, height:80 }}
                            /> 
                           
                            <Button type="submit" variant="contained" fullWidth> Update </Button>
                        </Form>
                }
            </div>
        </div>
    )
}

EditPost.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/createpost/${id}`);
    const { data } = await res.json();

    return { result: data }
}

export default EditPost;