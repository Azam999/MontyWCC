import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Monty Weekly Coding Challenge</title>
                <meta
                    name='description'
                    content='Montgomery Computer Science Club Weekly Coding Challenge'
                />
                <link rel='icon' href='/logo.svg' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Weekly Coding Challenge
                </h1>

                <p className={styles.description}>
                    Coding Challenges for the Montgomery Computer Science Club
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href='https://montycompsci.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <b>Created by Monty Comp Sci</b>
                    <span className={styles.logo}>
                        <Image
                            src='/logo.svg'
                            alt='Montgomery Computer Science Club Logo'
                            width={36}
                            height={36}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
