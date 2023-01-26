import { varelaRound } from "./common/fonts";

// Default export
export default function Hero() {
  return (
    <>
      {/* sm: flex column >md: flex row */}
      <div className="hero container mx-auto mb-5 sm: flex flex-column md: flex">
        <div className="hero-photo mx-auto">
          {/* <img src="" alt="João Silva photo" className="rounded-full" /> */}
        </div>
        <div className="hero-details mx-auto sm: text-center md: text-left">
          <div className={`${varelaRound.className} hero-name`}>João Silva</div>
          <div className="hero-jobtitle">Full Stack Web Developer</div>
        </div>
      </div>
    </>
  );
}
