const slides = document.querySelectorAll(".slider");
let currentSlides = 0;

// Add CSS transition to slides
slides.forEach(slide => {
  slide.style.transition = "transform 0.5s ease-in-out";
});

setInterval(() => {
  // Hide current slide
  slides[currentSlides].style.transform = "translateX(100%)";

  // Show next slide
  currentSlides = (currentSlides + 1) % slides.length;
  slides[currentSlides].style.transform = "translateX(0)";
}, 3000);

var typed =new Typed(".auto-type" , {
    strings:["Ac repair", "Freeze repair" ,"Home Repair" , "And More.."],
    typeSpeed: 100,
    backSpeed :60,
    loop: true
})



const loginpage = document.querySelector(".login-page")
const customer = document.querySelector(".login-customer")
const service = document.querySelector(".login-service")
const customerclick = document.querySelector(".customer")
const techclick = document.querySelector(".tech")
techclick.addEventListener("click", () => {
    service.style.display = "flex"
    customer.style.display = "none"
    techclick.style.backgroundColor=("green")
   customerclick.style.backgroundColor=("white")
   customerclick.style.color=("black")
   techclick.style.color=("white")
    
})
customerclick.addEventListener("click", () => {
    service.style.display = "none"
    customer.style.display = "flex"
    techclick.style.backgroundColor=("white")
    customerclick.style.backgroundColor=("green")
    customerclick.style.color=("white")
    techclick.style.color=("black")
   
})