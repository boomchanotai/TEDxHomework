import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Navbar from "./components/Navbar";

// import hero from "./assets/hero.png";
import dog from "./assets/Group 18.png";

import icon1 from "./assets/icon-1.png";
import icon2 from "./assets/icon-2.png";
import icon3 from "./assets/icon-3.png";
import icon4 from "./assets/icon-4.png";
import icon5 from "./assets/icon-5.png";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col-reverse md:grid grid-cols-2">
        <div className="flex flex-col justify-center p-12 lg:px-32">
          <h1
            className="font-bold text-center lg:text-left text-2xl lg:text-7xl"
            data-aos="fade"
          >
            What's meant to be will always find a way.
          </h1>
          <div
            className="mt-8 text-center lg:text-left text-base lg:text-3xl"
            data-aos="fade"
          >
            Pawsup help you to find the best partner for your dearest fluffly
            friend
          </div>
          <div className="mt-8 text-center lg:text-left" data-aos="fade">
            <button
              className="rounded-full text-white py-2 px-8 lg:py-4 lg:px-12 text-lg lg:text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-pink-700"
              style={{ backgroundColor: "#ed6f7b" }}
            >
              Find A Match
            </button>
          </div>
        </div>
        <div className="hero h-96 lg:h-full bg-green-400 bg-gradient rounded-custom"></div>
      </div>
      <div
        className="mx-auto py-32"
        style={{
          backgroundImage: `url(${dog})`,
          backgroundPosition: "bottom -150px right -150px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          className="font-bold text-2xl lg:text-3xl text-center mb-16 lg:px-8"
          data-aos="fade"
        >
          Dogs have these 5 major personality types
        </h2>
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-center gap-16">
          <div className="text-center" data-aos="fade-up">
            <img src={icon1} className="mx-auto h-40 w-40" alt="" />
            <div className="mt-8 font-bold text-2xl">Confident</div>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img src={icon2} className="mx-auto h-40 w-40" alt="" />
            <div className="mt-8 font-bold text-2xl">Shy</div>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img src={icon3} className="mx-auto h-40 w-40" alt="" />
            <div className="mt-8 font-bold text-2xl">Independent</div>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img src={icon4} className="mx-auto h-40 w-40" alt="" />
            <div className="mt-8 font-bold text-2xl">Laidback</div>
          </div>
          <div className="text-center" data-aos="fade-up">
            <img src={icon5} className="mx-auto h-40 w-40" alt="" />
            <div className="mt-8 font-bold text-2xl">Adaptable</div>
          </div>
        </div>
        <div className="mt-16 text-center" data-aos="fade">
          <button
            style={{ backgroundColor: "#84c3c8" }}
            className="rounded-full text-white py-4 px-12 text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
