require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/authRoutes'));
app.use('/usuarios', require('./routes/userRoutes'));
app.use('/cardapio', require('./routes/menuRoutes'));
app.use('/pedidos', require('./routes/pedidoRoutes'));
app.use('/relatorios', require('./routes/relatorioRoutes'));
app.use('/config', require('./routes/configRoutes'));
app.use('/ia', require('./routes/iaRoutes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
