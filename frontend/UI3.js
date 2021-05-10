import BoletinService from './services/BoletinService';
const boletinService = new BoletinService();

import { format } from 'timeago.js';

class UI3 {

  async renderBoletines() {
    const boletines = await boletinService.getBoletines();
    const boletinesCardContainer = document.getElementById('boletines-cards');
    boletinesCardContainer.innerHTML = '';
    boletines.forEach((boletin) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-name">${boletin.name}</h4>
                    <h4 class="card-email">${boletin.email}</h4>
                    <h4 class="card-alias">${boletin.alias}</h4>
                    <h4 class="card-about">${boletin.about}</p>
                    <a href="#" class="btn btn-danger delete" _id="${boletin._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(boletin.created_at)}
        </div>
      </div>
      `;
      boletinesCardContainer.appendChild(div);
    });
  }

  async addANewBoletin(boletin) {
    await boletinService.postBoletin(boletin);
    this.renderBoletines();
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

  async deleteBoletin(boletinId) {
    await boletinService.deleteBoletin(boletinId);
    this.renderBoletines();
  }

}

export default UI3;