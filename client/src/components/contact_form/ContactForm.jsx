import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i28qate',
        'template_6d2rjye',
        form.current,
        'user_w131cNcyyGRVHUJBOUUPK'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    envioExitoso();
  };

  const envioExitoso = () => {
    const boton = document.querySelector('form#contactForm button');
    boton.innerHTML = 'Mensaje enviado exitosamente';
    boton.disabled = true;
    boton.classList.add('button-disabled');

    const reset = document.querySelector('#newMessage');
    reset.addEventListener('click', () => {
      boton.classList.remove('button-disabled');
    });
  };

  return (
    <form id="contactForm" ref={form} onSubmit={sendEmail} className="row">
      <div className="col-12 col-md-6">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre*"
          required
        ></input>
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="lastname">Apellido</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Apellido*"
          required
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="email">Correo electronico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Correo electronico*"
          required
        ></input>
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="locationSector">Sector</label>
        <select id="locationSector" name="locationSector" required>
          <option value="Florida norte">Florida norte</option>
          <option value="Sauces 8">Sauces 8</option>
          <option value="Sauces 9">Sauces 9</option>
          <option value="Ceibos">Ceibos</option>
          <option value="Samanes">Samanes</option>
          <option value="Alborada">Alborada</option>
        </select>
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="date">Fecha de nacimiento</label>
        <input id="date" name="date" type="date" required></input>
      </div>
      <div className="col-12">
        <label htmlFor="message">Detalles del pedido</label>
        <textarea
          id="message"
          name="message"
          placeholder="Detalles del pedido*"
          required
        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" value="Send">
          Enviar
        </button>
      </div>
      <div className="col-12">
        <input type="reset" value="Enviar otro mensaje" id="newMessage"></input>
      </div>
    </form>
  );
};

export default ContactForm;
