class RegisterService {

    constructor() {
        this.URI = `/api/registers`;
    }

    async getRegisters() {
        const response = await fetch(this.URI);    
        const registers = await response.json();
        return registers;
    }

    async postRegister(register) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: register
        });
        const data = await res.json();
    }
}

export default RegisterService;