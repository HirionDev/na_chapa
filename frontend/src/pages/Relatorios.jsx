import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import api from '../api/api';
import Sidebar from '../components/Sidebar';

export default function Relatorios() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    async function fetchVendas() {
      const inicio = new Date();
      inicio.setHours(0,0,0,0);
      const fim = new Date();
      fim.setHours(23,59,59,999);
      const resp = await api.get('/relatorios/vendas', {
        params: {
          inicio: inicio.toISOString(),
          fim: fim.toISOString()
        }
      });
      setVendas(resp.data);
    }
    fetchVendas();
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h5" gutterBottom>Relatório de Vendas do Dia</Typography>
        <Button variant="outlined" sx={{ mb: 2 }}>Exportar Excel</Button>
        <table width="100%" style={{ background: "#1a1a1a", color: "#fff" }}>
          <thead>
            <tr>
              <th>Data</th>
              <th>Cliente</th>
              <th>Valor</th>
              <th>Forma Pgto</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map(venda => (
              <tr key={venda.id}>
                <td>{new Date(venda.criadoEm).toLocaleString()}</td>
                <td>{venda.pedido?.cliente || '-'}</td>
                <td>R$ {venda.valorTotal.toFixed(2)}</td>
                <td>{venda.formaPgto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
}
