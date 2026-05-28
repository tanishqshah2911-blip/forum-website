import Header from './Header';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import RevealRoot from './RevealRoot';

export default function Layout({ children }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <RevealRoot>
        <main>{children}</main>
      </RevealRoot>
      <Footer />
    </>
  );
}
