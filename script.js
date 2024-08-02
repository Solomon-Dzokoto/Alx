const arrow=document.querySelector('.arrow');
const country=document.querySelector('.select__country .countries .country');
const application=document.querySelector('.apply');
const cancel=document.querySelector('.cancel');
const openNav=document.querySelector('.open');
const navItems=document.querySelector('.nav__items');
const button=document.querySelector('.btn');
const sign=document.querySelector('.sign');
const closeNav=document.querySelector('.close');

openNav.addEventListener('click',()=>{
  navItems.style.display="flex";
  sign.style.display="block";
  button.style.display="flex";
  closeNav.style.display="block";
})
closeNav.addEventListener('click',()=>{
  navItems.style.display="none";
  sign.style.display="none";
  button.style.display="none";
  closeNav.style.display="none";
  openNav.style.display="block";
}
)
cancel.addEventListener('click',()=>{
  application.style.display="none"
});
arrow.addEventListener('click',()=>{
  country.classList.toggle('show'); 
});

const registerDiv = document.querySelector('.register');
const section = document.querySelector('.first__section');

window.addEventListener('scroll', () => {
  if (window.scrollY >= section.offsetTop + section.offsetHeight - registerDiv.offsetHeight) {
    registerDiv.classList.add('stick-to-top');
  } else {
    registerDiv.classList.remove('stick-to-top');
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>", 
    ]);
  });

const questions= document.querySelectorAll('.questions__answers');
const answers = document.querySelectorAll('.questions__answers .answer'); 

questions.forEach(question => {
  question.addEventListener('click', () => {
    const targetAnswerId = question.dataset.target; // Get the answer ID from 'data-focus'
    const targetAnswer = document.getElementById(targetAnswerId); // Get the answer element

    if (targetAnswer.style.display === 'flex') { 
      targetAnswer.style.display = 'none';
    } else {
      targetAnswer.style.display = 'flex';
    }
  });
});

const swiperSlides= document.querySelectorAll('.your-class .swiper-slide');
const moreInfo= document.querySelectorAll('.more__info'); 

swiperSlides.forEach(swiperSlide=> {
  swiperSlide.addEventListener('click', () => {
    const swiperFocusId = swiperSlide.dataset.focus; 
    const swiperFocus = document.getElementById(swiperFocusId ); // 

    if (swiperFocus.style.display === 'flex') { 
      moreInfo.style.display = 'none';
    } else {
      moreInfo.style.display = 'flex';
    }
  });
});