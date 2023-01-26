import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { varelaRound, nunito } from "./common/fonts";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`${nunito.className}`}>{children}</main>
      <Footer />
    </>
  );
}
