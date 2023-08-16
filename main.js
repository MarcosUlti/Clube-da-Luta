const toggleInput = document.querySelector('.toggle__input');
const body = document.body;
const header = document.querySelector('.header');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');
const finalPage = document.querySelector('#final-page')
const logo = document.getElementById('logo');
const pageTitle = document.querySelector('h1');
const pageText = document.querySelectorAll('p');
const toggleFill = document.querySelector('.toggle__fill');

toggleInput.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    toggleFill.classList.add('dark-mode');
    content.classList.add('dark-mode');
    finalPage.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    logo.src = 'assets/SPR_LogoDarkMode.png';
    pageTitle.style.color = 'white';
    pageText.forEach(p => p.style.color = 'white');
  } else {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    toggleFill.classList.remove('dark-mode');
    content.classList.remove('dark-mode');
    finalPage.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    logo.src = 'assets/SPR_LogoLightMode.png';
    pageTitle.style.color = 'black';
    pageText.forEach(p => p.style.color = 'black');
  }
});
