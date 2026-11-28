const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
});
