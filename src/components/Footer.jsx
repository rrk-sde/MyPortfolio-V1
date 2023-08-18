import React from 'react'

const Footer = () => {
    return (
        <footer
            className="flex md:flex-row flex-col justify-between md:px-36 px-12 md:items-start items-center py-8 dark:text-white font-semibold text-2xl gap-y-4 dark:bg-[#242424]">
            <div className="name-logo z-30">
                <h1>Rajeev Ranjan Kumar</h1>
            </div>
            <div className="z-30">
                <ul className="flex gap-x-4  text-center">
                    <li><a href="https://www.linkedin.com/in/rrk-sde/" target="_blank" rel="noopener noreferrer"><i
                        className="fa-brands fa-linkedin fa-beat"></i></a></li>

                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i
                        className="fa-brands fa-square-facebook fa-beat"></i></a></li>

                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i
                        className="fa-brands fa-square-instagram fa-beat"></i></a></li>


                    <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i
                        className="fa-brands fa-twitter fa-beat"></i></a></li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer