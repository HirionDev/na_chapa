import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function RelatorioTable({ vendas }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Data</TableCell>
          <TableCell>Cliente</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Forma Pgto</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vendas.map(venda => (
          <TableRow key={venda.id}>
            <TableCell>{new Date(venda.criadoEm).toLocaleString()}</TableCell>
            <TableCell>{venda.pedido?.cliente || '-'}</TableCell>
            <TableCell>R$ {venda.valorTotal.toFixed(2)}</TableCell>
            <TableCell>{venda.formaPgto}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
