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

    async deleteRegister(registerId) {
        const res = await fetch(`${this.URI}/${registerId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default RegisterService;