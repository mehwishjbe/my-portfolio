window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header")
    header.classList.toggle("sticky", this.window.scrollY > 0);
});














/* const hamburgerJS = document.querySelector('.hamburger');
const navMenuJS = document.querySelector('.navMenu');
const moveHeading = document.querySelector('.hero-image-h1');
let headingVisible =  true;


hamburgerJS.addEventListener("click", () =>{

    hamburgerJS.classList.toggle("active");
    navMenuJS.classList.toggle("active");

    if(headingVisible){
        moveHeading.style.display = 'none';
    }else{
        moveHeading.style.display = 'block';
    }
    headingVisible = !headingVisible;
});

document.querySelectorAll(".nav-link").forEach(ele => 
    ele.addEventListener("click", () => {

        hamburgerJS.classList.remove("active");
        navMenuJS.classList.remove("active");

        if(headingVisible){
            moveHeading.style.display = 'none';
        }else{
            moveHeading.style.display = 'block';
        }
        headingVisible = !headingVisible;
    }));

    
const card = document.querySelectorAll('.inner-card');

card.forEach(card => {
    card.addEventListener('click', function(){
    this.classList.toggle('is-flipped');
    });
}); */