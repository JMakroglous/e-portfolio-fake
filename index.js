
  function contact(event) {
    event.preventDefault();
    emailjs
    .sendForm(
      'service_p92qr6n',
      'template_thiutuq',
      event.target,
      '8uNZNeaiTBEu4bbGb'
    ).then(() => {
      console.log('this worked!')
    })
//  }

   const loading = document.querySelector('.modal__overlay--loading')
   const success = querySelector('.modal__overlay--success')
   loading.classlist += " modal__overlay--visible"
   setTimeout(() => {
    console.log('it worked 1')
  }, 500);
}