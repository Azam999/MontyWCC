import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
