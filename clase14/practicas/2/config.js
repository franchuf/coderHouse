module.exports = {
    MODO: process.env.MODO || 'prod',
    PUERTO: Number(process.env.PORT ?? 0),
    DEBUG: process.env.HOST || false,
}