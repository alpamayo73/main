import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
