const cron = require('node-cron');
const axios = require('axios');
const { env } = require("./config/env")

const chamarURLs = async() => {
    const URLs = {
        backend_integracao_pdv7_anotaai: env.BACKEND_INTEGRACAO_ANOTAAI_PDV7_URL
    }

    for (const url of Object.values(URLs)) {
        try {
            const response = await axios.post(url)
            console.log("✅ [OK]: Url chamada com successo, status", response.status);
        } catch (e) {
            console.log("🟥 [ERRO]: Ouve um erro ao chamar a url:", url, e);
        }
    }
}

cron.schedule('*/30 * * * * *', () => {
    console.log('Executando cron job:', new Date().toISOString());
    chamarURLs()
});

console.log("🚀 Cron-iniciado")