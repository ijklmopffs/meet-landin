import "./App.css";
import logo from "../assets/logo.svg";
import hero from "../assets/tablet/image-hero.png";
import heroLeft from "../assets/desktop/image-hero-left.png";
import heroRight from "../assets/desktop/image-hero-right.png";
import page from "./assets/Group 6.svg";
import page2 from "./assets/Group 6 copy.svg";
import man from "../assets/desktop/image-man-texting.jpg";
import men from "../assets/desktop/image-men-in-meeting.jpg";
import woman1 from "../assets/desktop/image-woman-in-videocall.jpg";
import woman2 from "../assets/desktop/image-women-videochatting.jpg";

function App() {
  return (
    <>
      <nav className="mx-auto w-fit p-4">
        <img src={logo} alt="" />
      </nav>
      <section>
        <div className="hidden lg:flex justify-between items-center">
          <div>
            <img src={heroLeft} alt="" />
          </div>
          <div>
            <h1 className="font-black text-6xl text-[#28283d] w-96 mx-auto">
              Group chat for everyone
            </h1>
            <p className="font-medium text-[#87879d] w-[30rem] my-2">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-[#4d96a9] rounded-full px-6 py-2 text-white font-black">
                Download <span className="text-[#8fe3e9]">v1.3</span>
              </button>
              <button className="bg-[#855fb1] text-white px-6 py-2 rounded-full font-black">
                What is it?
              </button>
            </div>
          </div>
          <div>
            <img src={heroRight} alt="" />
          </div>
        </div>

        <div className="md:flex lg:hidden flex-col my-20 justify-between items-center">
          <div>
            <img src={hero} alt="" />
          </div>
          <div className="my-20">
            <h1 className="font-black text-6xl text-[#28283d] w-96 mx-auto">
              Group chat for everyone
            </h1>
            <p className="font-medium text-[#87879d] w-[21rem] mx-auto md:mx-0 md:w-[30rem] my-2">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              <button className="bg-[#4d96a9] rounded-full px-6 py-2 text-white font-black">
                Download <span className="text-[#8fe3e9]">v1.3</span>
              </button>
              <button className="bg-[#855fb1] text-white px-6 py-2 rounded-full font-black">
                What is it?
              </button>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto my-20">
          <img src={page} alt="" />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4 mx-auto w-4/5 justify-center">
          <div>
            <img
              src={woman1}
              alt="woman in videocall"
              className="w-48 md:w-96 rounded-lg"
            />
          </div>
          <div>
            <img
              src={woman2}
              alt="women in videochat"
              className="w-48 md:w-96 rounded-lg"
            />
          </div>
          <div>
            <img
              src={men}
              alt="men in meeting"
              className="w-48 md:w-96 rounded-lg"
            />
          </div>
          <div>
            <img
              src={man}
              alt="man texting"
              className="w-48 md:w-96 rounded-lg"
            />
          </div>
        </div>

        <div className="my-40">
          <h3 className="uppercase font-black text-[#4d96a9]">
            built for modern use
          </h3>
          <h2 className="font-black text-4xl text-[#28283d] w-[23rem] mx-auto my-5">
            Smarter meetings, all in one place
          </h2>
          <p className="font-medium text-[#87879d] w-[21rem] md:w-[29rem] mx-auto my-2">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>

        <div className="w-fit mx-auto relative my-[-1.5rem] z-10">
          <img src={page2} alt="" />
        </div>

        <footer className="bg-footer-mobile md:bg-footer-tablet lg:bg-footer-desktop bg-cover bg-center md:py-16 lg:py-32 relative h-96">
          <div className="flex flex-col lg:flex-row md:gap-4 lg:gap-0 items-center justify-between md:p-4 lg:p-8 relative z-10">
            <h3 className="text-white font-black mt-10 md:mt-0 text-4xl md:text-5xl my-5 lg:my-0 w-96 lg:text-start">
              Experience more together
            </h3>
            <p className="text-[#fafafa] w-[17rem] md:w-[31rem] lg:w-80 lg:text-start">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <button className="bg-[#855fb1] rounded-full mt-10 md:mt-0 px-8 py-4 text-white font-black">
              Download <span className="text-[#d9b8ff]">v1.3</span>
            </button>
          </div>
          <div className="absolute inset-0 bg-[#469da9] opacity-50"></div>
        </footer>
      </section>
    </>
  );
}

export default App;
