import Head from "next/head";
import { BsFillMoonStarsFill, BsFillPhoneVibrateFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import Devweb from "../public/wep-developer.png";
import Code from "../public/code.png";
import Chameleon from "../public/chameleon.png";
import Handshake from "../public/handshake.png";
import Web1 from "../public/home.png";
import Web2 from "../public/formulario-clientes-administrador.png";
import Web3 from "../public/tabla-cliente.png";
import Perfil from "../public/perfil-pr2.jpg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Diaz David Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-8 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Diaz Jara David Ariel
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />{" "}
              </li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 rounded-md ml-6"
                href="#"
              >
                resumen
              </a>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Diaz Jara David Ariel
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Information Systems Analyst and Jr.Full-stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Front-end and Back-end developer who likes to program new systems.
              Contact me below and let&apos;s start to code !
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin
              className="cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/david-ariel-diaz/")
              }
            />
            <AiFillMail
              className="cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:davidarield94@gmail.com")
              }
            />
            <BsFillPhoneVibrateFill
              className="cursor-pointer"
              onClick={() =>
                (window.location.href = "https://wa.me/+5493826441588")
              }
            />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={Devweb} alt="presentation" />
          </div>
        </section>
        <section>
          <div className="p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <Image
                src={Perfil}
                alt="profile picture"
                className="self-center flex-shrink-0 w-80 h-80 border rounded-full md:justify-self-start bg-gray-100 dark:bg-gray-300 dark:border-gray-700"
              />
              <div className="flex flex-col">
                <h3 className="text-3xl text-center md:text-left dark:text-white py-6">
                  About me
                </h3>
                <p className="text-md text-gray-800 dark:text-gray-400 max-w-none mx-auto leading-8">
                  The first programming language I learned in the university was{" "}
                  <span className="text-teal-500">C++</span>, since then I have
                  discovered many more, so I&apos;m currently working with{" "}
                  <span className="text-teal-500">
                    HTML, CSS, JavaScript, React, Nextjs, Bootstrap, Tailwind,
                    PHP, MySQL, MongoDB, Node.JS and Express
                  </span>{" "}
                  and <span className="text-teal-500">Access.</span> I am
                  currently looking for a job where I can use the knowledge I
                  have acquired and developed to create solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600">
              Why should you choose me?
            </h2>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={Code}
                alt="image of example"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Clean coding
              </h3>
              <p className="text-gray-800 dark:text-gray-400">
                Looking for the best result when we talk about good coding practices.
              </p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={Handshake}
                alt="image of example"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Team player and great communication
              </h3>
              <p className="text-gray-800 dark:text-gray-400">
                Good attitude and situational awareness with the ability to communicate ideas in a proper and respectful language.
              </p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <Image
                src={Chameleon}
                alt="image of example"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Adaptative in any situations
              </h3>
              <p className="text-gray-800 dark:text-gray-400">
                Doing always my best when I have to adapt to a new enviroment to get the best result possible.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center pt-8">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              In the next section I will show some of my works so be sure to{" "}
              <span className="text-teal-500">check it out</span> !
            </p>
          </div>
          <div className="py-10">
            <div className="text-center ">
              <h3 className="text-3xl py-8 max-w-xl mx-auto dark:text-white">
                System web for a car dealership using HTML, CSS, JavaScript, PHP
                and MySQL
              </h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={Web1}
                  alt="image of example"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>{" "}
              <div className="basis-1/3 flex-1">
                <Image
                  src={Web2}
                  alt="image of example"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={Web3}
                  alt="image of example"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
