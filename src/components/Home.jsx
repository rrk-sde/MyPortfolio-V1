import React, { useEffect, useRef } from 'react'
import ringart from '../assets/ring-art.png'
import image from "../assets/3_IMG_1180.jpg"
import useWebsiteViews from '../hook/useWebsiteViews'
import { GrView } from 'react-icons/gr'
import { ColorRing } from 'react-loader-spinner'
import ToggleSwitch from './ToggleSwitch'
import businessman from "../assets/vecteezy_businessman.jpg";

const Home = ({ toggleTheme, theme }) => {
    // const params = useParams();
    // console.log(params);

    // const websiteName = window.location.href;
    const websiteName = "portfolio-v1"
    const views = useWebsiteViews(websiteName);
    // console.log(views)
    const data = {
        name: "Rajeev Ranjan Kumar",
        sociel: ["https://www.linkedin.com/in/rrk-sde/", "https://github.com/rrk-sde", "https://www.instagram.com/", "https://www.twitter.com/"],
        icon: ["fa-brands fa-linkedin fa-beat", "fa-brands fa-square-github fa-beat", "fa-brands fa-square-instagram fa-beat", "fa-brands fa-twitter fa-beat"],
        whatsapp: "https://api.whatsapp.com/send?phone=+918210787001&text=Hi%20Rajeev%2C%20I%20saw%20your%20Work%2C%20and%20It's%20impressive."
    }

    const projects = [
        {
            id: 1,
            // image: projectimg1,
            title: "Blogrr",
            category: "informational website",
            links: {
                live: "http://www.blogrr.live/",
                code: "https://github.com/rrk-sde/blog-app"
            }
        },
        {
            id: 2,
            // image: projectimg2,
            title: "Task",
            category: "Organizing",
            links: {
                live: "https://github.com/rrk-sde/task-tracker-client",
                code: "https://github.com/rrk-sde/task-tracker-client"
            }
        },
    ];


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
            <header className="flex md:flex-row flex-col justify-between md:px-36 px-12 md:items-start items-center py-8 dark:text-white font-semibold text-2xl gap-y-4 relative z-40">

                <div className="name-logo flex md:flex-row flex-col items-center gap-y-4 gap-12">
                    <h1>{data.name}</h1>
                    <div className='flex gap-2 items-center'>


                        <div className='flex items-center gap-2 dark:bg-white dark:text-black px-4 rounded-sm text-white bg-black'>

                            {views !== 0 && <i className='dark:text-black px-1 bg-white'><GrView /></i>}
                            <span>{views === 0 && <ColorRing height={30} width={30} />}{views !== 0 ? views : null}</span>

                        </div>
                        <div className='relative'>
                            {/* <h1>Dark Mode: Off</h1> */}
                            <ToggleSwitch onToggle={toggleTheme} theme={theme} />
                        </div>
                    </div>
                </div>




                <div className="z-30 md:text-white md:mr-40">
                    <ul className="flex gap-x-4 text-center md:dark:text-white">
                        {data?.sociel.map((item, i) => (
                            <li key={i} className={`cursor-pointer ${i === 2 || i === 3 ? 'opacity-100' : ''}`}>
                                <a href={item} target="_blank" rel="noopener noreferrer">
                                    <i className={data.icon[i]}></i>
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>




            </header >
<main className="md:px-36 px-9 md:text-start text-center dark:text-white flex md:flex-row flex-col items-center justify-between gap-y-12 my-auto z-30">
    {/* Left side - Text content */}
    <div className="md:w-1/2 w-full flex flex-col gap-y-6">
        <div className="md:text-5xl text-xl font-bold relative">
            <div className="md:block hidden">
                <img className="absolute md:-top-72 md:-left-56 opacity-25 -z-10" src={ringart} alt="Background Art" />
            </div>

            <div>Nice To Meet You! <br /></div>
            <div>
                I'm <span ref={typewriterRef} id="auto-input"
                    className="underline text-yellow-400 underline-offset-[10px] decoration-green-400">
                </span>
            </div>
        </div>

        <p className="text-xl">
            Based in India, I'm a MERN Stack Developer. <br />
            I'm passionate about creating full-stack web applications using the MERN stack.
        </p>

        <div>
            <a className="uppercase text-lg duration-150 hover:underline underline-offset-[6px] decoration-green-400 dark:bg-white bg-blue-200 text-black px-4 py-2 font-bold rounded-md"
                href={data.whatsapp}>
                Contact Me <i className="fa-brands fa-square-whatsapp fa-lg text-green-500"></i>
            </a>
        </div>
    </div>

    {/* Right side - Image */}
    <div className="md:w-1/2 w-full flex justify-center">
        <img className="w-full max-w-xs md:max-w-md" src={businessman} alt="Businessman" />
    </div>
</main>

        </div >
    )
}

export default Home
