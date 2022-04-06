import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function RegisterPage() {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const router = useRouter();

    async function handleRegister(e: React.SyntheticEvent) {
        e.preventDefault();
        const res = await axios
            .post('/api/auth/register', {
                name: name,
                email: email,
                password: password,
            })
            .catch((err) => console.log(err.message));

        if (res?.data.accessToken) {
            localStorage.setItem('token', res.data.accessToken);
            router.push('/');
        }
    }

    return (
        <Container>
            <Link href='/'>
                <Button className='mt-3 mb-3' variant='primary'>
                    ❮
                </Button>
            </Link>
            <h1 className='display-4' style={{ fontWeight: 800 }}>
                Register
            </h1>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        placeholder='Enter name'
                        onChange={(e: React.SyntheticEvent<EventTarget>) =>
                            setName((e.target as HTMLInputElement).value)
                        }
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        onChange={(e: React.SyntheticEvent<EventTarget>) =>
                            setEmail((e.target as HTMLInputElement).value)
                        }
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        onChange={(e: React.SyntheticEvent<EventTarget>) =>
                            setPassword((e.target as HTMLInputElement).value)
                        }
                    />
                </Form.Group>
                <Button
                    variant='primary'
                    type='submit'
                    onClick={(e) => handleRegister(e)}
                >
                    Register
                </Button>
            </Form>
        </Container>
    );
}