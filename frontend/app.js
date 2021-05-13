import "./styles/app.css";

import Login from './models/Login.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderLogins();
});


document.getElementById('login-form')
  .addEventListener('submit', function(e) {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

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
      ui.renderMessage('Has iniciado sesión correctamente', 'success', 2000);
    }

    e.preventDefault();
  });

// document.getElementById('logins-cards')
//   .addEventListener('click', e => {
//     const ui = new UI();
//     if (e.target.classList.contains('delete')) {
//       ui.deleteLogin(e.target.getAttribute('_id'));
//       ui.renderMessage('Login Deleted Successfully', 'success', 3000);
//     }
//     e.preventDefault();
//   });


