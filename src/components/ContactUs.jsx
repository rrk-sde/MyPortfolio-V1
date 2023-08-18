import React from 'react'

const ContactUs = () => {

    const handleSubmit = () => {
        alert("ok")
    }
    return (

        <section class="contactus md:px-36 px-9 py-24 dark:bg-[#242424]" role="contact">
            <div class="flex md:flex-row flex-col justify-between gap-x-52 gap-y-10">
                <div class="flex flex-col left-container gap-12 md:flex-1">
                    <div class="font-bold text-6xl dark:text-white">Contact</div>
                    <p class="dark:text-white">I would love to hear about your project and how i could help. Please fill
                        in
                        the
                        form. and i will get back to you as soon as possible.</p>
                </div>
                <div id="form-container" class="right-container md:w-1/2">
                    <form action="" class="flex flex-col" onSubmit={handleSubmit}>
                        <div>
                            <span className=' text-white'><i class="fa-regular fa-user"></i></span>
                            <input class="bg-transparent outline-none py-4 dark:caret-white px-4 dark:text-white text-black" type="text"
                                name="name" placeholder="Name" id="" />
                        </div>

                        <hr />
                        <div>
                            <span className=' text-white'><i class="fa-solid fa-envelope"></i></span>
                            <input class="bg-transparent outline-none py-4 dark:caret-white px-4 dark:text-white text-black" type="email"
                                name="email" placeholder="Email" id="" />
                        </div>

                        <hr />
                        <div className='w-[100%] flex'>
                            <span className='pt-[18px] text-white'><i class="fa-solid fa-message"></i></span>
                            <textarea class="bg-transparent outline-none py-4 dark:caret-white px-4 dark:text-white text-black"
                                placeholder="Message" name="" id="" cols="60" rows="5"></textarea>
                        </div>

                        <hr />
                    </form>
                    <div class="flex justify-end pt-12">
                        <button id="submit" type="submit"
                            class="uppercase text-lg underline underline-offset-[10px] decoration-green-400 dark:text-white">Send
                            message
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactUs