import BoletinService from './services/BoletinService';
const boletinService = new BoletinService();

import { format } from 'timeago.js';

class UI3 {
  async addANewBoletin(boletin) {
    await boletinService.postBoletin(boletin);
    this.clearBoletinForm();
  }

  clearBoletinForm() {
    document.getElementById('boletin-form').reset();
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
    const boletinForm = document.querySelector('#boletin-form');
    container.insertBefore(div, boletinForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }
}

export default UI3;