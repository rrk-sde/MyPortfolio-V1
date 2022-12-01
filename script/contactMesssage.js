const submitButton = document.getElementById('submit');

// const contactContainer = document.getElementsById('form-container');
const contactContainer2 = document.querySelector('#form-container');


// alert(contactContainer2.innerHTML);

submitButton.addEventListener('click', () => {
    console.log("clicked")
    // contactContainer.innerText = '';
    contactContainer2.innerHTML = '<div class="text-red-700 flex items-center mt-24 font-bold text-4xl fa-fade"> <span><i class="pr-4 fa-solid fa-triangle-exclamation "></i></span> Uncaught Error </div> <div class="dark:text-white ml-16 mt-2 e"> try again after decade </div>'
})