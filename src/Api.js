class Api {

    constructor(authToken) {
        this.authToken = authToken;
    }

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    BASE_URL = '/games';

    createHeaders() {
        return this.authToken ? {
            ...this.headers,
            'Authorization': 'Bearer ' + this.authToken
        } : this.headers;
    }

    async getAll() {
        return await fetch(this.BASE_URL, {
            method: 'GET',
            headers: this.createHeaders()
        });
    }
}

export default Api;