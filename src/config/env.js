const z = require("zod")
require('dotenv').config();

const envSchema = z.object({
    NODE_ENV: z.enum(["dev", "test", "prod"]).default("dev"),
    BACKEND_INTEGRACAO_ANOTAAI_PDV7_URL: z.string().url()
})

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
	console.error('🟥 [ERRO]: Variavies ambiente', _env.error.format());
	throw new Error('Variavies ambiente não encontradas');
}

module.exports = { env: _env.data }