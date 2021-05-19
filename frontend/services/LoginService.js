class LoginService {

    constructor() {
        this.URI = `/api/logins`;
    }

    async getLogins() {
        const response = await fetch(this.URI);    
        const logins = await response.json();
        return logins;
    }

    async postLogin(login) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: login
        });
        const data = await res.json();
    }
}

export default LoginService;