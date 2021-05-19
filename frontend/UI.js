import LoginService from './services/LoginService';
const loginService = new LoginService();

import { format } from 'timeago.js';

class UI {
  async addANewLogin(login) {
    await loginService.postLogin(login);
    this.clearLoginForm();
  }

  clearLoginForm() {
    document.getElementById('login-form').reset();
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
    const loginForm = document.querySelector('#login-form');
    container.insertBefore(div, loginForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }
}

export default UI;

