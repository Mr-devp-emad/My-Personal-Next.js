'use client'
import Typewriter from 'typewriter-effect';
import React from "react";





import { SiVisualstudiocode } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiSvelteFill } from "react-icons/ri";
import { FaGit } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


import Head from 'next/head'; // Importing the Head component for handling document head
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Head>
        <title> Emad Ahmed Portfolio </title>
      </Head>
      <header className="text-gray-400 bg-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" href="/"> Home </Link>
            <Link className="mr-5 hover:text-white" href="/aboutus"> About Us </Link>
            <Link className="mr-5 hover:text-white" href="/contact"> Contact Us </Link>
            <Link className="mr-5 hover:text-white" href="/privacypolicy"> Privacy Policy </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">

            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

            <span className="ml-3 text-xl xl:block lg:hidden">Emad Ahmed</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Resume 
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>


      {/*Hero Section*/}

      <section className="text-black bg-white body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

          {/*Image Tag */}
          <img className="bg-transparent shadow-[0_4px_25px_ -5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto"
            src="images/emaad1.jpg" alt="hero" />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-right">
            {/*Typewriter Effect */}


            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><Typewriter
              options={{
                strings: ['Bachlors In Arts', 'Front-End Developer'],
                autoStart: true,
                loop: true,
              }}
            /></h1>
            <p className="mb-8 leading-relaxed">Master Next..Js With Emad Ahmed For,

              I,am Front-end Developer
              Passionate about crafting-user friendly web. interfaces. Over the past 1.5 years. I have been learning and refining my skills in frontend technologies through various handson projects. I have a foundational understanding of Al too having completed a basic course in the field.</p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Placeholder</label>
                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Git Hub </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex text-gray-300">
              <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-purple-700 hover:text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-400 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-purple-800 hover:text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-400 mb-1">Download on the</span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*Feature Section */}
      <section className="text-black body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">Quater 1 Assingments / Projects </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black text-opacity-90">In Quarter 1, we explored the foundational technologies of web development: HTML, CSS, Java, and TypeScript. We learned how HTML structures content on the web, while CSS styles it to enhance user experience. Java introduced us to object-oriented programming concepts, and TypeScript helped us write more robust JavaScript code with type safety. Throughout the quarter, we applied our knowledge by creating several projects that showcased our skills and creativity. The projects we worked on are mentioned below..</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://media.istockphoto.com/id/531633071/vector/calculator.jpg?s=612x612&w=0&k=20&c=TrSndAw_fs5LVFqagmF16aqpKb7ZYzyMZ7bVL3QVyP8=" alt="image" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Project-01</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">CLI-Base-Calculiator</h2>
                <p className="leading-relaxed text-base">A CLI (Command-Line Interface) calculator is a simple program that allows users to perform mathematical calculations directly from the command line. It takes user input in the form of mathematical expressions and returns the result..</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://media.istockphoto.com/id/697417092/photo/hand-inserting-atm-credit-card.jpg?s=612x612&w=0&k=20&c=qRIJSzJ2dsLQI3js62LHLP3ESrbKrndsUTxdCDKp4qY=" alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Project-02</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">ATM-Machine</h2>
                <p className="leading-relaxed text-base">An ATM (Automated Teller Machine) is a self-service banking terminal that enables users to perform various financial transactions without the assistance of a bank teller. Users can withdraw cash, check their account balances, deposit funds, and transfer money between accounts. ATMs are available 24/7, providing convenience and flexibility for banking needs..</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS87eg9HOkFx1A9-m1jLYT9guHHynFhqVHw&s" alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Project-03</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Adventure Game.</h2>
                <p className="leading-relaxed text-base">Embark on a quest through uncharted lands,With puzzles to solve and secrets in your hands.Face fierce foes and forge bonds anew,In an adventure game where dreams come true!.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://play-lh.googleusercontent.com/Bddip99b3uI3X3i2Z0M7NxBgcZ0q6jyjVHd7Q1zHEzvs_1jlVuNc_57dl-QsF3S-_Nw" alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font"> Project-04 </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Currency Convertor</h2>
                <p className="leading-relaxed text-base">A currency converter is a tool that helps users exchange one currency for another at current exchange rates. It’s essential for travelers, businesses, and investors dealing in multiple currencies. With just a few clicks, you can see how much your money is worth in a different country, making it easier to budget and plan expenses. Many converters also provide historical rates and trends, giving users insights into currency fluctuations. Overall, it simplifies global transactions and enhances financial decision-making.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Feature Section = 2  */}
      <section className="text-black bg-white body-font">
        <div className="container px-5 py-24 mx-auto"> </div>
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-red-600 mb-4">Projects Features  &  Commands </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the essential feature of each TypeScript project and easily run them using the npx commands provided below .</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i simple_calculator-by-emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i number.guessing.game-by-emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i to_do_list-app_by_emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i currency-converter_by_emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i word-counter_by_emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i adventure-game-by-emad-ahmed</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i atm-machine-by-emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i quiz-from-emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i countdown-timer_emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i object-orient-program-by-emad-ahmed</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i oop-my-bank-by-emad234</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">npm i adventure-by-emad-ahmed</span>
            </div>
          </div>
        </div>

        <a href="https://github.com/Mr-devp-emad">
          <button className="bg-gray-800 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-green-600 hover:bg-opacity-100 focus:outline-none bg-green-800">
            <img className="w-15 h-10 rounded-lg" src="images/git-hub image.png" alt="image" />
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-white mb-1">Visit Git-HUB</span>
              <span className="title-font text-black font-bold">Mr-Devp-Emad</span>
            </span>
          </button>
        </a>
        <section className="text-black body-font bg-white">
          <div className="container px-5 py-24 mx-auto"></div>
          <div className="flex flex-wrap w-full mb-20"></div>
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium font-bold title-font mb-2 text-bg-blue-900">  Revealing the Secret Talents Lurking in My Skill Set !  </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
        </section>
      </section>

      {/*Development Tools And Frame Works Icons */}


      <section>
        <div className='container px-2 py-8 mx-auto flex flex-warp flex justify-center items-center space-x-6 
 text-2xl'>
          {/*Icons 1 */}
          <h1 className='title-font sm text-2xl mb-4 font-medium text-white'><Typewriter
            options={{
              strings: ['Programming Languages'],
              autoStart: true,
              loop: true,
            }}
          /></h1>


          <div className='flex flex-col items-center bg-white border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <SiVisualstudiocode className='text-sky-500 text-7xl ' />
            <span className='mt-2 text-lg text-black'> Visual Studio code </span>
          </div >

          <div className='flex flex-col items-center bg-white border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <ImHtmlFive className='text-sky-500 text-7xl ' />
            <span className='mt-2 text-lg text-black'> HTML </span>
          </div >

          <div className='flex flex-col items-center bg-white border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <FaCss3Alt className='text-sky-500 text-7xl ' />
            <span className='mt-2 text-lg text-black'> CSS </span>
          </div >

          <div className='flex flex-col items-center bg-black border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <TbBrandJavascript className='text-yellow-500 text-7xl ' />
            <span className='mt-2 text-lg text-white'> JAVASCRIPT </span>
          </div >

          <div className='flex flex-col items-center bg-black border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <FaPython className='text-yellow-500 text-7xl ' />
            <span className='mt-2 text-lg text-white'> PYTHON </span>
          </div >

          <div className='flex flex-col items-center bg-white border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <SiTypescript className='text-yellow-500 text-7xl ' />
            <span className='mt-2 text-lg text-black'> TYPESCRIPT </span>
          </div >



        </div>

        <div className='flex flex-row justify-center space-x-4'>
          {/* NODE.JS */}
          <div className='flex flex-col items-center bg-black border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <RiNodejsLine className='text-green-500 text-7xl ' />
            <span className='mt-2 text-lg text-white'> NODE.JS </span>
          </div >

          {/* REACT */}
          <div className='flex flex-col items-center bg-white border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <FaReact className='text-blue-500 text-7xl ' />
            <span className='mt-2 text-lg text-black'> REACT </span>
          </div >

          <div className='flex flex-col items-center bg-white border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <RiSvelteFill className='text-blue-500 text-7xl ' />
            <span className='mt-2 text-lg text-black'> SEVELTE </span>
          </div >

          <div className='flex flex-col items-center bg-slate-500 border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <FaGit className='text-red-600 text-7xl ' />
            <span className='mt-2 text-lg text-white'> GIT </span>
          </div >

          <div className='flex flex-col items-center bg-white border-yellow-500 p-4 transition-transform
  duration-400 ease-in-out transform hover:scale-110 '>
            <SiTailwindcss className='text-blue-500 text-7xl ' />
            <span className='mt-2 text-lg text-black'> TAILWIND CSS </span>
          </div >
          <section>
            <div className='container px-2 py-8 mx-auto flex flex-wrap justify-center items-center space-x-6 text-2xl'>

              <h1 className='title-font sm:text-3xl text-2xl mb-4 font-medium text-white'>
                <Typewriter
                  options={{
                    strings: ['Build and Deployment Automation Tools'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </section>






          {/* Our Team  */}

        </div>
      </section>
      {
        <section className="text-gray-900 bg-white body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-black">OUR TEAM</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"We're a coding team that's all about collaboration and building awesome projects together!"</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vkhkZgcQLjk8heylfiO_pK444wmEno0lGQ&s" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">Miss Mehak Alamgir</h2>
                    <h3 className="text-yellow-500 mb-3 font-bold" title-font text-3xl text-2xl mb-4 font-medium text-white><Typewriter
                      options={{
                        strings: ['Top skills: SEO, Web Design, Web Content Writing'],
                        autoStart: true,
                        loop: true,
                      }}
                    /> </h3>
                    <p className="mb-4">Hybrid Engineer at IBM | Electronics Engineer | YouTuber | Graphics Designer | A Humble Human Being</p>
                    <a href="https://www.linkedin.com/in/mehak-alamgir/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://static.vecteezy.com/system/resources/thumbnails/007/522/853/small_2x/business-man-icon-for-your-web-profile-free-vector.jpg" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">M. Muddasir Chandio</h2>
                    <h3 className="text-yellow-500 mb-3 font-bold" title-font text-3xl text-2xl mb-4 font-medium text-white><Typewriter
                      options={{
                        strings: ['Full-stack Developer with Next.j'],
                        autoStart: true,
                        loop: true,
                      }}
                    /> </h3>

                    <p className="mb-4">I'm Muhammad Mudasir Chandio, a budding developer passionate about Python and TypeScript, with a keen interest in mastering Next.js.</p>
                    <a href="https://www.linkedin.com/in/muhammad-mudasir-chandio-5487b42ba/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://as1.ftcdn.net/v2/jpg/02/79/66/94/1000_F_279669429_QHjwZmYFW68Ta4msxPjheDr7waf35edL.jpg" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">Amna Younus</h2>
                    <h3 className="text-yellow-500 mb-3 font-bold" title-font text-3xl text-2xl mb-4 font-medium text-white><Typewriter
                      options={{
                        strings: ['Software Engineer | Tech Architec'],
                        autoStart: true,
                        loop: true,
                      }}
                    /> </h3>

                    <p className="mb-4">Experienced in POS systems, HRMS solutions, payment integrations, and CRM expertise.</p>
                    <a href="https://www.linkedin.com/in/amna-younus/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYOIQ7ne2QyRdRoXcWYRD9zOjmYKAOkLcFA&s" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">Muhammad Uzair</h2>
                    <h3 className="text-yellow-500 mb-3 font-bold" title-font text-3xl text-2xl mb-4 font-medium text-white><Typewriter
                      options={{
                        strings: ['Artificial Intelligence Programmer'],
                        autoStart: true,
                        loop: true,
                      }}
                    /> </h3>


                    <p className="mb-4">Focused on developing AI algorithms to transform data into actionable information.</p>
                    <a href="https://www.linkedin.com/in/muhammad-uzair-066733314/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      }
      {/*Contact US */}
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="absolute inset-0 bg-gray-900">
          <iframe title="map" width="100%" height="100%" frameBorder="0" scrolling="yes" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Us </h2>
            <p className="leading-relaxed mb-5">Please fill this form if you have any quieres / complain or if you have any message for us </p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">Read our privicy policy for any probelms .</p>
          </div>
        </div>
      </section>

      {/*Footer  */}
      <footer className="text-gray-400 bg-white body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-900">NewsLetter</label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
              Subscribe Now
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-2 md:text-left text-center">

            <br className="lg:block hidden" />
            Copyright@ All Rights Reserved
          </p>
        </div>
      </footer>





    </main>
  )
}