import axios from 'axios'
import React, { useState } from 'react'
import SuccessMessage from './SuccessMessage'

const ContactUs = () => {

    const apiUrl = 'https://contactviews.onrender.com/api/contacts'
    const websiteName = "portfolio-v1"
    const [loading, setLoading] = useState(false)
    const [messageSent, setMessageSent] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post(apiUrl + "/" + websiteName, data)

            if (response.status === 201) {
                setData({ name: '', email: '', message: '' });
            }
            setMessageSent(true);

            setTimeout(() => {
                setMessageSent(false);
            }, 5000);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (

        <section className="contactus md:px-36 px-9 py-24 dark:bg-[#242424]" role="contact">
            <div className="flex md:flex-row flex-col justify-between gap-x-52 gap-y-10">
                <div className="flex flex-col left-container gap-12 md:flex-1">
                    <div className="font-bold text-6xl dark:text-white">Contact</div>
                    <p className="dark:text-white">I would love to hear about your project and how i could help. Please fill in the form. and i will get back to you as soon as possible.</p>
                </div>
                <div id="form-container" className="right-container md:w-1/2">

                    {messageSent ? (
                        <SuccessMessage />
                    ) : (
                        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                            <div>
                                <span className=' dark:text-white '><i className="fa-regular fa-user"></i></span>
                                <input className="bg-transparent outline-none py-4 dark:caret-white px-4 dark:text-white text-black" type="text" value={data.name} name="name" placeholder="Name" required id="" onChange={handleChange} />
                            </div>

                            <hr />
                            <div>
                                <span className=' dark:text-white'><i className="fa-solid fa-envelope"></i></span>
                                <input className="bg-transparent outline-none py-4 dark:caret-white px-4 dark:text-white text-black" type="email" value={data.email} required
                                    name="email" placeholder="Email" id="" onChange={handleChange} />
                            </div>

                            <hr />
                            <div className='w-[100%] flex'>
                                <span className='pt-[18px] dark:text-white'><i className="fa-solid fa-message"></i></span>
                                <textarea className="bg-transparent outline-none py-4 dark:caret-white px-4 dark:text-white text-black" onChange={handleChange} value={data.message}
                                    required placeholder="Message" name="message" id="" cols="60" rows="5"></textarea>
                            </div>

                            <hr />
                            <div className="flex justify-end pt-12">
                                <button id="submit" type="submit"
                                    className="uppercase text-lg underline underline-offset-[10px] decoration-green-400 dark:text-white">Send message
                                </button>
                            </div>
                        </form>
                    )}


                </div>
            </div>
        </section>

    )
}

export default ContactUs