class API {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async getCrypto() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`
        const connectToApi = await fetch(url)
        const data = await connectToApi.json()
        return {
            data
        }
    }

    async getInfoForCryptoSelected(realCoin, cryptoCoin) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${realCoin}&api_key=${this.apiKey}`
        const connectToApi = await fetch(url)
        const resultForRequest = await connectToApi.json()
        return {
            resultForRequest
        }
    }
}