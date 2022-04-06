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
                <h1 className={styles.title}>Weekly Coding Challenge</h1>

                <p className={styles.description}>
                    Montgomery Computer Science Club
                </p>

                <section className={`${styles.section} p-5`}>
                    <h2 className='mb-4'>What is Weekly Coding Challenge (WCC)?</h2>
                    <div className={styles.sectionContainer}>
                        <div>
                            <h4>Get Rewards!</h4>
                            <img src="https://img.icons8.com/bubbles/1000/000000/gift.png"/>
                            <p>Every week, there will be a coding challenge and whoever gets the most points will get rewards, which include gift cards, merchandise, and discord nitro! The gift cards will be for Amazon and the merchandise will have the montgomery computer science club logo. To see how to earn points, check out the section on the left.</p>
                        </div>
                        <div>
                            <h4>Earn Points!</h4>
                            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/1000/000000/external-points-black-friday-cyber-monday-flaticons-flat-flat-icons.png"/>
                            <p>Whoever solves the most test cases in the least amount of time gets the most points and these points will be a large factor in determining who will get a board position along with attendance and other factors. Additionally, there will be a Kahoot each week to review the previous meeting's material and these will also count for points. </p>
                        </div>
                    </div>
                </section>
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
