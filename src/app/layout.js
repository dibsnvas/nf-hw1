import Footer from '/home/diana/firstday/components/Footer.jsx';
import Navbar from '/home/diana/firstday/components/navbar.jsx'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <div className="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}