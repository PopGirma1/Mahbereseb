import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const EditNote = ({ note }) => {
    const [form, setForm] = useState({ firstName: note.firstName,lastName: note.lastName,userName: note.userName,email: note.email, password: note.password,phoneNumber: note.phoneNumber });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updateNote = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/viewAccount/Index");
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

        if (!form.firstName) {
            err.firstName = 'first name is required';
        }
        if (!form.lastName) {
            err.lastName = 'last name is required';
        }
        if (!form.userName) {
            err.userName = 'user name is required';
        }
        if (!form.email) {
            err.email = 'email is required';
        }
        if (!form.password) {
            err.password = 'password is required';
        }
        if (!form.phoneNumber) {
            err.phoneNumber = 'Phone is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Update Note</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.firstName ? { content: 'Please enter a first name', pointing: 'below' } : null}
                                label='first name'
                                placeholder='first name'
                                name='firstName'
                                value={form.firstName}
                                onChange={handleChange}
                            />
                          <Form.Input
                                fluid
                                error={errors.lastName ? { content: 'Please enter a last name', pointing: 'below' } : null}
                                label='lastName'
                                placeholder='last Name'
                                name='lastName'
                                value={form.lastName}
                                onChange={handleChange}
                            />
                                                        <Form.Input
                                fluid
                                error={errors.userName ? { content: 'Please enter a user name', pointing: 'below' } : null}
                                label='userName'
                                placeholder='user Name'
                                name='userName'
                                value={form.userName}
                                onChange={handleChange}
                            />
                                                        <Form.Input
                                fluid
                                error={errors.email ? { content: 'Please enter a email', pointing: 'below' } : null}
                                label='email'
                                placeholder='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                            />
                                                        <Form.Input
                                fluid
                                error={errors.password ? { content: 'Please enter a password', pointing: 'below' } : null}
                                label='password'
                                placeholder='password'
                                name='password'
                                value={form.password}
                                onChange={handleChange}
                            />
                                                        <Form.Input
                                fluid
                                error={errors.phoneNumber ? { content: 'Please enter a phone number', pointing: 'below' } : null}
                                label='phone number'
                                placeholder='phone number'
                                name='phoneNumber'
                                value={form.phoneNumber}
                                onChange={handleChange}
                            />

                            <Button type='submit'>Update</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

EditNote.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default EditNote;