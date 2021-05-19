import "./styles/app.css";

import Login from './models/Login.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
});


document.getElementById('login-form')
  .addEventListener('submit', function(e) {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const login = new Login(email, password);

    // Validating User Input
    if (email === '' || password === '') {
      ui.renderMessage('Por favor, rellena todos los campos', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewLogin(formData);
      ui.renderMessage( 'Has iniciado sesión correctamente', 'success', 2000 );
      setTimeout( function () { window.location.href = "./index.html"; }, 2000 );
    }

    e.preventDefault();
  });


