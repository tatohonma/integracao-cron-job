const cron = require("node-cron");
const axios = require("axios");
const { env } = require("./config/env");

const chamarURLs = async () => {
  const URLs = {
    backend_integracao_pdv7_anotaai: env.BACKEND_INTEGRACAO_ANOTAAI_PDV7_URL,
    backend_integracao_pdv7_keeta: env.BACKEND_INTEGRACAO_KEETA_PDV7_URL,
  };

  for (const [key, url] of Object.entries(URLs)) {
    if (url) {
      try {
        await axios.post(url);
        console.log(`✅ [OK]: servico ${key} chamado com sucesso`);
      } catch (e) {
        console.log(
          `🟥 [ERRO]: Ouve um erro ao chamar servico: ${key}\n` +
            `- URL: ${url}`,
        );
      }
    }
  }
};

cron.schedule("*/30 * * * * *", () => {
  console.log("Executando cron job:", new Date().toISOString());
  chamarURLs();
});

console.log("🚀 Cron-iniciado");
