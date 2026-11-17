
  function contact(event) {
    event.preventDefault();
     const loading = document.querySelector('.modal__overlay--loading')
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
  loading.classList.remove("modal__overlay--visible");
}, 500);
  }

