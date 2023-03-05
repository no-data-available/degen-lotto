import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Masthead from '../components/Masthead';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Masthead />
      <main className="content">
        <Component {...pageProps} />
      </main>
    </>
  );
}
