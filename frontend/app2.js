import "./styles/app.css";

import Register from './models/Register.js';
import UI from './UI2.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
});


document.getElementById('register-form')
  .addEventListener('submit', function(e) {
    const name = document.getElementById( 'name' ).value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const date_of_birth = document.getElementById( 'date_of_birth' ).value;
    const image = document.getElementById( 'image' ).files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('name', name);
    formData.append('email', email);
    formData.append( 'password', password );
    formData.append('date_of_birth', date_of_birth);

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const register = new Register(name, email, password, date_of_birth);

    // Validating User Input
    if (name === '' || email === '' || password === '' || date_of_birth === '') {
      ui.renderMessage('Por favor, rellena todos los campos', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewRegister(formData);
      ui.renderMessage( 'Te has registrado correctamente', 'success', 2000 );
      setTimeout( function () { window.location.href = "./index.html"; }, 2000 );
    }

    e.preventDefault();
  });