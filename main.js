const hamburgerJS = document.querySelector('.hamburger');
const navMenuJS = document.querySelector('.navMenu');


hamburgerJS.addEventListener("click", () =>{

    hamburgerJS.classList.toggle("active");
    navMenuJS.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(ele => 
    ele.addEventListener("click", () => {

        hamburgerJS.classList.remove("active");
        navMenuJS.classList.remove("active");
    }));

    
const card = document.querySelectorAll('.inner-card');

card.forEach(card => {
    card.addEventListener('click', function(){
    this.classList.toggle('is-flipped');
    });
});