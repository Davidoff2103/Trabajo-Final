import RegisterService from './services/RegisterService';
const registerService = new RegisterService();

import { format } from 'timeago.js';

class UI2 {
  async addANewRegister(register) {
    await registerService.postRegister(register);
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
}

export default UI2;