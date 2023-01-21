import { Varela_Round } from "@next/font/google";
import { Nunito } from "@next/font/google";

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito();

export default function Footer() {
  return (
    <>
      <div className="footer-author">João Silva</div>
      <div className="footer-date">January, 2023</div>
      {/*       <div className="footer-designed_by"></div>
       */}{" "}
    </>
  );
}
