
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
  }