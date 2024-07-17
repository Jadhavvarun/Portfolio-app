import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '@/components/Main';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Varun - Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Main />
      </main>
      <Footer />
    </div>
  );
}