import "./styles/app.css";

import Boletin from './models/Boletin.js';
import UI from './UI3.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  // ui.renderBoletines();
});


document.getElementById('boletin-form')
  .addEventListener('submit', function(e) {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const alias = document.getElementById('alias').value;
    const about = document.getElementById('about').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append( 'alias', alias );
    formData.append('about', about);


    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const boletin = new Boletin(name, email, alias, about);

    // Validating User Input
    if (name === '' || email === '' || alias === '' || about === '') {
      ui.renderMessage('Por favor, rellena todos los campos', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBoletin(formData);
      ui.renderMessage('Te has registrado en nuestro boletín correctamente', 'success', 2000);
    }

    e.preventDefault();
  });

// document.getElementById('boletines-cards')
//   .addEventListener('click', e => {
//     const ui = new UI();
//     if (e.target.classList.contains('delete')) {
//       ui.deleteBoletin(e.target.getAttribute('_id'));
//       ui.renderMessage('Boletin Deleted Successfully', 'success', 3000);
//     }
//     e.preventDefault();
//   });




