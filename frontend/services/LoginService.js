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

    // async deleteLogin(loginId) {
    //     const res = await fetch(`${this.URI}/${loginId}`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         method: 'Delete'
    //     });
    //     const data = await res.json();
    //     console.log(data);
    // }

}

export default LoginService;