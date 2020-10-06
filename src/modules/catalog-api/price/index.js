const axios = require('axios');

class Price {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async updatePrice(id, body) {
        const price = await axios.put(
            `https://api.vtex.com/${this.credentials.accountName}/pricing/prices/${id}`,
            {
                headers: this.credentials,
                body
            }
        );

        return price;
    }

    async getPrice(id) {
        const price = await axios.post(
            `https://api.vtex.com/${this.credentials.accountName}/pricing/prices/${id}`,
            {
                headers: this.credentials,
            }
        );

        return price;
    }
}

module.exports =  Price;