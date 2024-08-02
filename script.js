const arrow=document.querySelector('.arrow');
const country=document.querySelector('.select__country .countries .country');
const application=document.querySelector('.apply');
const cancel=document.querySelector('.cancel');

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

/*
  const swiperSlider=document.querySelectorAll('.swiper-slider');

  const questionAnswers = document.querySelectorAll('.ninth__section .container .Faqs .questions__answers'); // Select all question elements
  const answers = document.querySelectorAll('.ninth__section .container .Faqs .questions__answers .answer'); // Select all answer elements
  
  questionAnswers.forEach(questionAnswer => { 
    questionAnswer.addEventListener('click', () => {
      const answerId = questionAnswer.dataset.target; 
      const answerTarget = document.getElementById(answerId); // Find the answer element
  
      if (answerTarget.style.display === 'block') {
        answerTarget.style.display = "none"; // Hide the answer if it's visible
      } else {
        // Hide all answers, then show the target
        answers.forEach(answer => answer.style.display = "none"); 
        answerTarget.style.display = "block"; 
      }
    });
  });

  const questionsAnswers = document.querySelectorAll(".ninth__section .container .Faqs .questions__answers ");

questionsAnswers.forEach(questionAnswer => {
  questionAnswer.addEventListener("click", () => {
    questionAnswer.classList.toggle("active");
  });
});
  
*/

const questions= document.querySelectorAll('.ninth__section .container .Faqs .questions__answers');
const answers = document.querySelectorAll('.ninth__section .container .Faqs .questions__answers .answer'); 

questions.forEach(question => {
  question.addEventListener('click', () => {
    const targetAnswerId = question.dataset.target; // Get the answer ID from 'data-focus'
    const targetAnswer = document.getElementById(targetAnswerId); // Get the answer element

    // Toggle display of the answer and update arrow icons
    if (targetAnswer.style.display === 'flex') { 
      targetAnswer.style.display = 'none';
    } else {
      targetAnswer.style.display = 'flex';
    }
  });
});

const swiperSlides= document.querySelectorAll('.swiper-slide');
const moreInfo= document.querySelectorAll('.more__info'); 

swiperSlides.forEach(swiperSlide=> {
  swiperSlide.addEventListener('click', () => {
    const swiperFocusId = swiperSlide.dataset.focus; // Get the answer ID from 'data-focus'
    const swiperFocus = document.getElementById(swiperFocusId ); // Get the answer element

    // Toggle display of the answer and update arrow icons
    if (swiperFocus.style.display === 'flex') { 
      moreInfo.style.display = 'none';
    } else {
      moreInfo.style.display = 'flex';
    }
  });
});