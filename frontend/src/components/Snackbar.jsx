import React from 'react';
import { Snackbar as MuiSnackbar, Alert } from '@mui/material';

export default function Snackbar({ open, onClose, message, severity = "success" }) {
  return (
    <MuiSnackbar open={open} autoHideDuration={4000} onClose={onClose}>
      <Alert severity={severity} sx={{ width: '100%' }}>{message}</Alert>
    </MuiSnackbar>
  );
}
