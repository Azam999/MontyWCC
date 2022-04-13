import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
            <footer className='footer'>
                <a
                    href='https://montycompsci.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <b>Created by Montgomery Computer Science Club</b>
                    <span className='logo'>
                        <Image
                            src='/logo.svg'
                            alt='Montgomery Computer Science Club Logo'
                            width={36}
                            height={36}
                        />
                    </span>
                </a>
            </footer>
        </>
    );
}

export default MyApp;
