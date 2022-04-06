import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/components/NavigationBar.module.css';

export default function NavigationBar() {
    return (
        <Navbar>
            <Container>
                <Link href='/' passHref={true}>
                    <Navbar.Brand style={{fontWeight: 900}}>Monty WCC</Navbar.Brand>
                </Link>
                <Nav className='ms-auto'>
                    <Link href='/dashboard' passHref={true}>
                        <Nav.Link className={styles.link}>Dashboard</Nav.Link>
                    </Link>
                    <Link href='/auth/login' passHref={true}>
                        <Nav.Link className={styles.link}>Login</Nav.Link>
                    </Link>
                    <Link href='/auth/register' passHref={true}>
                        <Nav.Link className={styles.link}>Register</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
