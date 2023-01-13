import Navbar from "./common/navbar";
import Footer from "./common/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
}
