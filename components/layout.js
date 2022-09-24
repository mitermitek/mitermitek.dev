import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-2 sm:px-4 py-2.5 mb-10">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
