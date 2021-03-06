import { useState } from 'react';
import { postData, getData } from '../../utils/rest_api';

import './registrationForm.css';

export const RegistrationForm = () => {
  const [emailAvailable, setEmailAvailable] = useState(true);

  const register = async (e) => {
    e.preventDefault();

    const newUser = {
      first_name: document.querySelector('#firstname').value,
      last_name: document.querySelector('#lastname').value,
      phone: document.querySelector('#phone').value,
      country: document.querySelector('#country').value,
      city: document.querySelector('#city').value,
      street: document.querySelector('#address').value,
      user_email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
      is_admin: false
    };

    fetch('http://localhost:3001/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_email: newUser.user_email
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    const users = await getData(
      `http://localhost:3001/api/user/${newUser.user_email}`
    );

    if (users.length > 0) {
      setEmailAvailable(false);
    } else {
      setEmailAvailable(true);
      postData('http://localhost:3001/api/user', newUser).then((data) => {
        console.log(data);
      });
      window.location.href = 'http://localhost:3000/login';
    }
  };

  return (
    <form id="registrationForm" onSubmit={register} className="row">
      <div className="col-12 col-md-6">
        <label htmlFor="firstname">Nombre</label>
        <input
          id="firstname"
          name="firstname"
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
      <div className="col-12 col-md-6 country">
        <label htmlFor="country">Pa??s</label>
        <select id="country" name="country" required>
          <option value="Ecuador">Ecuador</option>
        </select>
      </div>
      <div className="col-12 col-md-6 city">
        <label htmlFor="city">Ciudad</label>
        <select id="city" name="city" required>
          <option value="Guayaquil">Guayaquil</option>
          <option value="Daule">Daule</option>
          <option value="Samborondon">Samborond??n</option>
          <option value="Duran">Dur??n</option>
        </select>
      </div>
      <div className="col-12">
        <label htmlFor="address">Direcci??n</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Direcci??n*"
          required
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="phone">Tel??fono</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Tel??fono*"
          required
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="email">Correo electr??nico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Correo electr??nico*"
          required
        ></input>
        {!emailAvailable ? (
          <p className="warningForm">
            Ya existe un usuario registrado con este correo
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="col-12">
        <label htmlFor="password">Contrase??a</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Contrase??a*"
          required
        ></input>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Registrarme
        </button>
      </div>
    </form>
  );
};
