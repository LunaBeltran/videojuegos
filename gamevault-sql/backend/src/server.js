const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
const MODE = (process.env.MODE || 'vulnerable').toUpperCase();

app.listen(PORT, () => {
  console.log('==================================================');
  console.log(`🎮 GameVault Backend iniciado en el puerto ${PORT}`);
  console.log(`🛡️  Modo de Laboratorio Activo: [ ${MODE} ]`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api/games`);
  console.log('==================================================');
});


