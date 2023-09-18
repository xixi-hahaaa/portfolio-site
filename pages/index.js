import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react"; // Import useEffect
import deved from "../public/dev-ed-wave.png";
import deved2 from "../public/icebearprofile.jpg";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showFirstImage, setShowFirstImage] = useState(true);

  // Function to toggle between images with smooth fade
  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };

  // Determine which image to display based on showFirstImage state
  const imageToShow = showFirstImage ? deved : deved2;

  // Function to create a snowflake
  const createSnowflake = () => {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.width = `${Math.random() * 4 + 2}px`;
    snowflake.style.height = `${Math.random() * 4 + 2}px`;
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);

    // Remove the snowflake when it reaches the bottom
    snowflake.addEventListener("animationiteration", () => {
      snowflake.remove();
    });
  };

  // Function to create multiple snowflakes
  const createSnowflakes = () => {
    setInterval(createSnowflake, 100); // Adjust the interval for snowflake creation
  };

  // Start creating snowflakes when the component mounts
  useEffect(() => {
    createSnowflakes();
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/winter_polar_bear_icon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="flex flex-col items-center justify-center h-screen fixed top-0 right-0 bg-gray-200 dark:bg-gray-800 p-4">
            <a href="https://github.com/xixi-hahaaa" target="_blank" rel="noopener noreferrer"> 
              <AiFillGithub className="text-5xl text-gray-600 dark:text-gray-400 mb-4" />
            </a>
            <a href="https://www.linkedin.com/in/jessica-zixi-tian/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-5xl text-gray-600 dark:text-gray-400 mb-4" />
            </a>
            <a href="mailto:jesscctian@gmail.com">
              <AiFillGoogleCircle className="text-5xl text-gray-600 dark:text-gray-400 mb-4" />
            </a>
          </div>
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">icebear my beloved 🐻‍❄️</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.overleaf.com/project/63bc7eb381345786e5b91f48" target="_blank" rel="noopener noreferrer"
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Left side (Image) */}
            <div className={`w-full md:w-1/2 opacity-${showFirstImage ? "100" : "0"} transition-opacity duration-500`}>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 relative overflow-hidden md:h-96 md:w-96">
                <Image src={imageToShow} layout="fill" objectFit="cover" />
              </div>
            </div>

            {/* Right side (Text) */}
            <div className="w-full md:w-1/2 p-10 mt-[10rem]">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl animate-fade-in">
                jessica tian
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl animate-fade-in">
                computer science student at the University of Waterloo.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl animate-fade-in">
                ice bear enthusiast.
              </p>
              <button
                onClick={toggleImage}
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300 ease-in-out"
              >
                profile swap
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
