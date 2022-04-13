import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Badge, Button } from 'react-bootstrap';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const dashboard: React.FC = ({}) => {
    interface User {
        _id: string;
        name: string;
        email: string;
        points: number;
        createdAt: string;
        updatedAt: string;
    }
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        console.log('hello');
        axios.get('/api/users').then((res) => {
            setUsers(
                res.data.users.sort((a: User, b: User) => b.points - a.points).slice(0, 10)
            );
        });
    }, []);

    return (
        <Container>
            <Link href='/'>
                <Button className='mt-3 mb-3' variant='primary'>
                    ❮
                </Button>
            </Link>
            <h1 className='display-4' style={{ fontWeight: 800 }}>
                Dashboard
            </h1>
            <section>
                <h2>Leaderboard</h2>
                <ListGroup as='ol' numbered>
                    {users.map((user) => (
                        <ListGroup.Item
                            as='li'
                            className='d-flex justify-content-between align-items-start'
                            key={user._id}
                        >
                            <div className='ms-2 me-auto'>
                                <div className='fw-bold'>{user.name}</div>
                                {user.email}
                            </div>
                            <Badge bg='primary' pill>
                                {user.points}
                            </Badge>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </section>
            <br />
            <section className="mb-5">
                <h2>This week's challenge</h2>
                <Image src="/usaco_problems/1/2014_jan_bronze_1_1.png" width="1000" height="600" />
                <Image src="/usaco_problems/1/2014_jan_bronze_1_2.png" width="1000" height="800" />
            </section>
        </Container>
    );
};

export default dashboard;
