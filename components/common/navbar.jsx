import { Varela_Round } from "@next/font/google";
import { Nunito } from "@next/font/google";

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito();

export default function Navbar() {
  return (
    <>
      <div className="navbar container mx-auto">
        <div className={`${varelaRound.className} nav-name`}>João Silva</div>
        <div className={`${nunito.className} nav-options`}>
          <div>About me</div>
          <div>Projects</div>
          <div>Education</div>
          <div>Skills</div>
          <div>Experience</div>
        </div>
      </div>
      <style jsx>{`
        `}</style>
    </>
  );
}
