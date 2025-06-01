import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';
import api from '../api/api';

export default function AIChatDialog({ open, onClose }) {
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');

  const handleEnviar = async () => {
    const resp = await api.post('/ia/mensagem', { mensagem });
    setResposta(resp.data.resposta);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Atendimento IA</DialogTitle>
      <DialogContent>
        <TextField
          label="Mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        {resposta && (
          <Typography sx={{ background: "#222", p: 2, borderRadius: 2 }}>
            <b>Resposta:</b> {resposta}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
        <Button onClick={handleEnviar} variant="contained">Enviar</Button>
      </DialogActions>
    </Dialog>
  );
}
