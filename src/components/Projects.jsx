import React, { useEffect, useState } from 'react'
import projectimg1 from '../assets/project-1.png'
import projectimg2 from '../assets/project-2.png'
import projectimg3 from '../assets/project-3.png'
import projectimg4 from '../assets/project-4.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            image: projectimg1,
            title: "Ecom Kisan Haath",
            category: "Ecommerce",
            links: {
                live: "https://ecom-kisan.netlify.app/",
                code: "https://github.com/rrk-sde"
            }
        },
        {
            id: 2,
            image: projectimg2,
            title: "Task Tracker DND",
            category: "Organizing",
            links: {
                live: "https://task-tracker-cb.netlify.app/tasks",
                code: "https://github.com/rrk-sde/task-tracker-todo"
            }
        },
        {
            id: 3,
            image: projectimg3,
            title: "Darsh Manufactoring Website",
            category: "Showcase",
            links: {
                live: "https://dasrsh-manufactoring-frontend.vercel.app/",
                code: "https://github.com/rrk-sde/dasrsh-manufactoring-frontend"
            }
        },
        {
            id: 4,
            image: projectimg4,
            title: "The Rick and Morty API",
            category: "Anime",
            links: {
                live: "https://rick-morty-characters-seven.vercel.app/characters",
                code: "https://github.com/rrk-sde/rick-morty-characters"
            }
        }
    ];

    const projects2 = [
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
    const [shouldHide, setShouldHide] = useState(true);

    useEffect(() => {

        const handleScroll = () => {

            const scrollPositionToHide = 600;

            if (window.scrollY > scrollPositionToHide) {
                setShouldHide(true);
            } else {
                setShouldHide(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="Projects dark:bg-[#131013] md:px-36 px-9">
            <div className="head-project flex justify-between items-center dark:text-white text-center">
                <div>
                    <div className="md:text-6xl text-4xl font-bold">Projects</div>
                    <div className={`fixed top-8 left-16 flex flex-col gap-4 z-40 ${shouldHide ? 'hidden' : ''}`}>
                        {projects2.map((project) => {
                            return (
                                <div className='relative' key={project.id}>
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="bg-red-400 border-2 font-semibold text-sm flex rounded-full w-12 h-12 justify-center items-center">
                                        {project.title}
                                    </a>
                                    <span className={`after:contents rotate-45 text-sm text-red-400 -top-2 -right-2 absolute `} data-content="New">
                                        new
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <button className="uppercase text-lg underline underline-offset-[10px] decoration-green-400">
                        Contact Me
                    </button>
                </div>

            </div>
            <div aria-label="Project Container" className="grid grid-cols-1 md:grid-cols-2 py-12 gap-y-16 gap-x-16 dark:text-white uppercase">
                {projects.map(project => (
                    <div key={project.id} className={`project-${project.id} flex flex-col space-y-4`}>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <img className='hover:border-emerald-400 hover:border-2' src={project.image} alt={project.title} />
                        </a>

                        <div className="text-xl font-semibold">{project.title}</div>
                        <div className="">{project.category}</div>
                        <div className="flex gap-x-8">
                            <button className="uppercase text-lg underline underline-offset-[10px] decoration-green-400">
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live URL</a>
                            </button>
                            <button className="uppercase text-lg underline underline-offset-[10px] decoration-green-400">
                                <a href={project.links.code} target="_blank" rel="noopener noreferrer">view code</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Projects