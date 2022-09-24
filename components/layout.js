import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mb-10">{children}</main>
      <Footer />
    </>
  );
}
