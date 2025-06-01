import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import api from '../api/api';
import Sidebar from '../components/Sidebar';

export default function ChatIA() {
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');

  const handleEnviar = async () => {
    const resp = await api.post('/ia/mensagem', { mensagem });
    setResposta(resp.data.resposta);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 4, maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>Atendimento com IA</Typography>
        <TextField
          label="Mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleEnviar}>Enviar</Button>
        {resposta && (
          <Typography sx={{ mt: 2, background: "#222", p: 2, borderRadius: 2 }}>
            <b>Resposta:</b> {resposta}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
