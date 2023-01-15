import { Varela_Round } from "@next/font/google";
import { Nunito } from "@next/font/google";

// Fonts
const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito();

// Default export
export default function Hero() {
  return (
    <>
      {/* sm: flex column >md: flex row */}
      <div className="hero container mx-auto mb-5">
        <div className="hero-photo">
          {/* <img src="" alt="João Silva photo" /> */}
        </div>
        <div className={`${nunito.className} hero-details`}>
          <div className={`${varelaRound.className} hero-name`}>João Silva</div>
          <div className="hero-jobtitle">Full Stack Web Developer</div>
        </div>
      </div>
    </>
  );
}
