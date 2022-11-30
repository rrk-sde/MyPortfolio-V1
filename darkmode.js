


// const toggle = document.getElementById('toggle');
// var body = document.getElementById('body');

// toggle.addEventListener("click", myFunc);

// function myFunc() {
//     console.log("runn");
//     if (toggle.checked == false) {
//         body.classList.remove('light');
//         body.classList.add('dark');
//     }
//     else {
//         body.classList.remove('dark');
//         body.classList.add('light');
//     }

// }

const toogle_on = document.getElementById("toggle-on");
const toogle_off = document.getElementById("toggle-off");
// var body = document.getElementById('body');

// function myFunc() {
//     if (toogle_on.classList.contains("hidden"))
//         body.setAttribute('class', 'dark')
//     else body.setAttribute('class', ' ')
// }

// toogle_on.addEventListener("click", myFunc);
// toogle_off.addEventListener("click", myFunc);


const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

const toggle = () => {
    // event.preventdefault();
    toogle_on.classList.toggle("hidden");
    toogle_off.classList.toggle("hidden");
}



const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        toogle_off.classList.add("hidden");

        // toogle_on.classList.remove("hidden");
        return;
    }
    toogle_on.classList.add("hidden");
}

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
// } else {
//     document.documentElement.classList.remove('dark')
// }

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme', "light");
        toggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem('theme', 'dark');
    toggle();

}

toogle_on.addEventListener('click', () => {
    console.log("clicked on")
    themeSwitch();

})


toogle_off.addEventListener('click', () => {
    console.log("clicked off")

    themeSwitch();
    // localStorage.theme = 'light'

})

// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')

themeCheck();