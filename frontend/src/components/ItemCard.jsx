import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

export default function ItemCard({ item }) {
  return (
    <Card sx={{ width: 210, m: 1 }}>
      {item.imagem && <CardMedia component="img" height="120" image={item.imagem} alt={item.nome} />}
      <CardContent>
        <Typography variant="h6">{item.nome}</Typography>
        <Typography variant="body2">{item.descricao}</Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>R$ {item.preco}</Typography>
      </CardContent>
    </Card>
  );
}
