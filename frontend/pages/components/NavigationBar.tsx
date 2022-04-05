import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function NavigationBar() {
    return (
        <Navbar bg='light' variant='light'>
            <Container>
                <Link href='/' passHref={true}>
                    <Navbar.Brand>Monty WCC</Navbar.Brand>
                </Link>
                <Nav className='ms-auto'>
                    <Link href='/dashboard' passHref={true}>
                        <Nav.Link>Dashboard</Nav.Link>
                    </Link>
                    <Link href='/auth/login' passHref={true}>
                        <Nav.Link>Login</Nav.Link>
                    </Link>
                    <Link href='/auth/register' passHref={true}>
                        <Nav.Link>Register</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
