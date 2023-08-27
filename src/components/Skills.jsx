import React from 'react'

const Skills = () => {

    const skills = [
        {
            title: "HTML5",
            desc: "Structure"
        },
        {
            title: "CSS3",
            desc: "Styling"
        },
        {
            title: "JavaScript",
            desc: "Functionality"
        },
        {
            title: "ReactJS",
            desc: "Library"
        },
        {
            title: "Tailwind CSS",
            desc: "Utility-first CSS Framework"
        },
        {
            title: "Material-UI",
            desc: "UI component library"
        },
        // {
        //     title: "Bootstrap",
        //     desc: "CSS Framework"
        // },
        {
            title: "Redux",
            desc: "State management"
        },
        {
            title: "Java",
            desc: "Programming Language"
        },
        {
            title: "MongoDB",
            desc: "NoSQL Database"
        },
        {
            title: "MySQL",
            desc: "Relational Database"
        },
        {
            title: "Node.js",
            desc: "JavaScript Runtime"
        },
        {
            title: "Express.js",
            desc: "Web Application Framework"
        }
    ];


    return (
        <section className="skills dark:bg-[#131013] md:px-36  dark:text-white">
            <div className="skills-container relative grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-y-8 md:text-left text-center">
                {
                    skills.map((skill, i) => {
                        return (
                            <div key={i} className="item-11 flex flex-col gap-y-2">
                                <div className="text-2xl font-bold">{skill.title}</div>
                                <p>{skill.desc}</p>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Skills