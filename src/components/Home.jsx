import React, { useEffect, useRef } from 'react'
import ringart from '../assets/ring-art.png'
import image from "../assets/3_IMG_1180.jpg"

const Home = () => {

    const data = {
        name: "Rajeev Ranjan Kumar",
        sociel: ["https://www.linkedin.com/in/rrk-sde/", "https://www.facebook.com/", "https://www.instagram.com/", "https://www.twitter.com/"],
        icon: ["fa-brands fa-linkedin fa-beat", "fa-brands fa-square-facebook fa-beat", "fa-brands fa-square-instagram fa-beat", "fa-brands fa-twitter fa-beat"],
        whatsapp: "https://api.whatsapp.com/send?phone=+918210787001&text=Hi%20Rajeev%2C%20I%20saw%20your%20Work%2C%20and%20It's%20impressive."
    }

    const typewriterRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typewriterRef.current, {
            strings: ["Rajeev Ranjan Kumar"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className="global-container dark:bg-[#131013] light:bg-white bg-white flex flex-col min-h-screen ">
            <header
                className="flex md:flex-row flex-col justify-between md:px-36 px-12 md:items-start items-center py-8 dark:text-white font-semibold text-2xl gap-y-4 ">

                <div className="name-logo z-30">
                    <h1>{data.name}</h1>
                </div>

                <div className="z-30 md:text-white">
                    <ul className="flex gap-x-4 text-center md:text-black dark:md:text-white">
                        {data?.sociel.map((item, i) => (
                            <li key={i}>
                                <a href={item} target="_blank" rel="noopener noreferrer">
                                    <i className={data.icon[i]}></i>
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>

                <img className="md:absolute dark:bg-[#242424] bg-gray-600 relative md:max-w-lg z-10 md:right-48 top-0  md:rounded-b-3xl  "
                    src={image} alt="" srcSet="" />

            </header>
            <main className="md:px-36 px-9 md:text-start text-center dark:text-white flex flex-col gap-y-12 my-auto z-30">
                <div className="md:text-5xl text-xl font-bold flex flex-col md:gap-y-4 gap-y-1">
                    <div className="md:block hidden">
                        <img className="absolute md:-top-72 md:-left-56 opacity-25 -z-10" src={ringart} alt=""
                            srcset="" />
                    </div>
                    <div>
                        Nice To Meet You! <br />
                    </div>

                    <div>
                        I'm <span ref={typewriterRef} id="auto-input"
                            className="underline text-yellow-400 underline-offset-[10px] decoration-green-400">
                        </span>
                    </div>
                </div>


                <p className="text-xl md:w-1/2">Based in India, I'm a MERN Stack Developer. <br />
                    I'm passionate about creating full-stack web applications using the MERN stack.
                </p>
                <div>
                    <a className="uppercase text-lg duration-150 hover:underline underline-offset-[6px] decoration-green-400 dark:bg-white bg-blue-200 text-black px-4 py-2 font-bold rounded-md"
                        href={data.whatsapp}>
                        Contact
                        Me <i className="fa-brands fa-square-whatsapp fa-lg text-green-500"></i></a>
                </div>

            </main>
        </div >
    )
}

export default Home