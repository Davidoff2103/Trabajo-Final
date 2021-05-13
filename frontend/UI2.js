import RegisterService from './services/RegisterService';
const registerService = new RegisterService();

import { format } from 'timeago.js';

class UI2 {

  // async renderRegisters() {
  //   const registers = await registerService.getRegisters();
  //   const registersCardContainer = document.getElementById('registers-cards');
  //   registersCardContainer.innerHTML = '';
  //   registers.forEach((register) => {
  //     const div = document.createElement('div');
  //     div.className = 'animated fadeInRight';
  //     div.innerHTML = `
  //     <div class="card m-2">
  //       <div class="row no-gutters">
  //           <div class="col-md-4">
  //               <img src="${register.imagePath}" class="img-fluid" alt="">
  //           </div>
  //           <div class="col-md-8">
  //               <div class="card-block px-2">
  //                   <h4 class="card-name">${register.name}</h4>
  //                   <h5 class="card-email">${register.email}</h5>
  //                   <h6 class="card-password">${register.password}</h6>
  //                   <p class="card-date_of_birth">${register.date_of_birth}</p>
  //                   <a href="#" class="btn btn-danger delete" _id="${register._id}">X</a>
  //               </div>
  //           </div>
  //       </div>
  //       <div class="card-footer w-100 text-muted">
  //         ${format(register.created_at)}
  //       </div>
  //     </div>
  //     `;
  //     registersCardContainer.appendChild(div);
  //   });
  // }

  async addANewRegister(register) {
    await registerService.postRegister(register);
    // this.renderRegisters();
    this.clearRegisterForm();
  }

  clearRegisterForm() {
    document.getElementById('register-form').reset();
    document.getElementById('name').focus();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    // Creating a div
    const div = document.createElement('div');
    // Styling the div
    div.className = `message ${colorMessage}`;
    // Adding Text to the div
    div.appendChild(document.createTextNode(message));
    // Puting in the documnet
    const container = document.querySelector('.col-md-4');
    const registerForm = document.querySelector('#register-form');
    container.insertBefore(div, registerForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  // async deleteRegister(registerId) {
  //   await registerService.deleteRegister(registerId);
  //   this.renderRegisters();
  // }

}

export default UI2;