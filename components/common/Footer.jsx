import { varelaRound, nunito } from "./fonts";

export default function Footer() {
  return (
    <>
      <div className={`${nunito.className}`}>
        <div className="footer-author">João Silva</div>
        <div className="footer-date">January, 2023</div>
        {/*       <div className="footer-designed_by"></div>
         */}
      </div>
    </>
  );
}
