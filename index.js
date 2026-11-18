
  function contact(event) {
    event.preventDefault();
     const loading = document.querySelector('.modal__overlay--loading')
     const success = document.querySelector('.modal__overlay--success')
     loading.classList.add("modal__overlay--visible");
    emailjs
    .sendForm(
      'service_p92qr6n',
      'template_thiutuq',
      event.target,
      '8uNZNeaiTBEu4bbGb'
   ).then(() => {
      console.log('This worked!')
    })
    setTimeout(() => {
  loading.classList.remove("modal__overlay--visible")
  success.classList.add ("modal__overlay--visible");
}, 500);

}

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
   document.body.classList += "dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

