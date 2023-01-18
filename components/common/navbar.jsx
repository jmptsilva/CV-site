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
      <div className="navbar mx-auto sticky flex flex-row items-center justify-evenly bg-bleu-de-france text-white opacity-75">
        <div className={`${varelaRound.className} nav-name text-3xl`}>
          João Silva
        </div>

        {/* <div class="lg:hidden">
          <button class="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div> */}

        <div
          className={`${nunito.className} nav-options flex flex-row gap-3 text-xl`}
        >
          <div>About me</div>
          <div>Projects</div>
          <div>Education</div>
          <div>Skills</div>
          <div>Experience</div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
