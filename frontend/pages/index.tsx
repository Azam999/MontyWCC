import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import DesignedButton from './components/DesignedButton';
import InformationSection from './components/InformationSection';

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

                <Link href='/dashboard' passHref>
                    <div className='mb-5'>
                        <DesignedButton text='Go to Dashboard' />
                    </div>
                </Link>

                <InformationSection
                    title='Get Rewards!'
                    description='Every week, there will be a coding challenge and whoever gets the most points will get rewards,which include gift cards, merchandise, and discord nitro! The gift cards will be for Amazon and the merchandise will have the Montgomery Computer Science Club logo. To see how to earn points, check out the section below.'
                    image='https://img.icons8.com/bubbles/1000/000000/gift.png'
                    toRight={true}
                />
                <InformationSection
                    title='Earn Points!'
                    description="Whoever solves the most test cases in the least amount of time gets the most points and these points will be a large factor in determining who will get a board position along with attendance and other factors. Additionally, there will be a Kahoot each week to review the previous meeting's material and these will also count for points."
                    image='https://img.icons8.com/external-flaticons-flat-flat-icons/1000/000000/external-points-black-friday-cyber-monday-flaticons-flat-flat-icons.png'
                    toRight={false}
                />
                <section
                    className={`${styles.section} p-5 mt-5`}
                    style={{ backgroundColor: '#f3f3f3' }}
                >
                    <h2 className='mb-4'>How does WCC work?</h2>
                    <div className={styles.sectionContainer}>
                        <div className='me-3'>
                            <h4>The Web Application</h4>
                            <img src='https://img.icons8.com/dusk/1000/undefined/web.png' />
                            <p>
                                To get started with the weekly coding challenge,
                                you can register with the button at the top of
                                the page. You will be able to log in and view
                                your dashboard. From there, you can view your
                                current points, the new coding challenges, and
                                the leaderboard. Every week you will be able to
                                submit your solution to the coding challenge and
                                obtain points.
                            </p>
                        </div>
                        <div className='me-3'>
                            <h4>Which Programming Languages Can I Choose?</h4>
                            <img src='https://img.icons8.com/stickers/1000/000000/laptop-coding.png' />
                            <p>
                                You can choose almost any programming language,
                                but this most common languages for this type of
                                coding challenge would be C++, Python, and Java.
                                Although Python and Java are excellent
                                programming languages, C++ is the most popular
                                and most efficient programming language for this
                                type of coding challenge.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
