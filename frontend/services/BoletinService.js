class BoletinService {

    constructor() {
        this.URI = `/api/boletines`;
    }

    async getBoletines() {
        const response = await fetch(this.URI);    
        const boletines = await response.json();
        return boletines;
    }

    async postBoletin(boletin) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: boletin
        });
        const data = await res.json();
    }

    async deleteBoletin(boletinId) {
        const res = await fetch(`${this.URI}/${boletinId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default BoletinService;