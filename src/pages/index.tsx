import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Main from '@/components/Main';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Main />
      </main>
      <Footer />
    </div>
  );
}