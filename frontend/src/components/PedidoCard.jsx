import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

export default function PedidoCard({ pedido }) {
  const statusCor = {
    preparacao: "warning",
    pronto: "success",
    finalizado: "default",
    cancelado: "error"
  };

  return (
    <Card sx={{ minWidth: 220, border: "1px solid #333" }}>
      <CardContent>
        <Typography variant="h6">Pedido #{pedido.id}</Typography>
        <Chip label={pedido.status} color={statusCor[pedido.status] || "default"} size="small" />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Cliente: {pedido.cliente || "N/A"}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>Itens:</Typography>
          <ul>
            {(pedido.itens || []).map((item, idx) =>
              <li key={idx}>{item.nome} x{item.quantidade || 1}</li>
            )}
          </ul>
        </Box>
        <Typography variant="body2">Pagamento: {pedido.pagamento}</Typography>
      </CardContent>
    </Card>
  );
}
