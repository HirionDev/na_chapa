import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import api from '../api/api';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      const resp = await api.post('/auth/login', { email, senha });
      localStorage.setItem('token', resp.data.token);
      navigate('/');
    } catch (err) {
      setErro('Login inválido');
    }
  };

  return (
    <Card sx={{ maxWidth: 350, margin: 'auto', marginTop: 12, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Senha" type="password" fullWidth margin="normal" value={senha} onChange={e => setSenha(e.target.value)} />
          {erro && <Typography color="error">{erro}</Typography>}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Entrar</Button>
        </form>
      </CardContent>
    </Card>
  );
}
