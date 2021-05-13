import LoginService from './services/LoginService';
const loginService = new LoginService();

import { format } from 'timeago.js';

class UI {

  // async renderLogins() {
  //   const logins = await loginService.getLogins();
  //   const loginsCardContainer = document.getElementById('logins-cards');
  //   loginsCardContainer.innerHTML = '';
  //   logins.forEach((login) => {
  //     const div = document.createElement('div');
  //     div.className = 'animated fadeInRight';
  //     div.innerHTML = `
  //     <div class="card m-2">
  //       <div class="row no-gutters">
  //           <div class="col-md-8">
  //               <div class="card-block px-2">
  //                   <h4 class="card-email">${login.email}</h4>
  //                   <h6 class="card-password">${login.password}</h6>
  //                   <a href="#" class="btn btn-danger delete" _id="${login._id}">X</a>
  //               </div>
  //           </div>
  //       </div>
  //       <div class="card-footer w-100 text-muted">
  //         ${format(login.created_at)}
  //       </div>
  //     </div>
  //     `;
  //     loginsCardContainer.appendChild(div);
  //   });
  // }

  async addANewLogin(login) {
    await loginService.postLogin(login);
    // this.renderLogins();
    this.clearLoginForm();
  }

  clearLoginForm() {
    document.getElementById('login-form').reset();
    //document.getElementById('name').focus();
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

  async deleteLogin(loginId) {
    await loginService.deleteLogin(loginId);
    this.renderLogins();
  }

}

export default UI;

