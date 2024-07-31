const registerDiv = document.querySelector('.register');
const section = document.querySelector('.first__section');

window.addEventListener('scroll', () => {
  if (window.scrollY >= section.offsetTop + section.offsetHeight - registerDiv.offsetHeight) {
    registerDiv.classList.add('stick-to-top');
  } else {
    registerDiv.classList.remove('stick-to-top');
  }
});
