import React from 'react';
import { Box, Typography, Stack, Button, Paper } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LoanRequestCard({
  category = 'Business Startup',
  subcategory = 'Shop Setup',
  maxAmount = 'PKR 10 Lakh',
  onContinue,
  onDelete
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        backgroundColor: '#F0FDF4',
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
        marginTop: "15px"
      }}
    >
      <Stack spacing={1} mb={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <CategoryIcon color="success" />
          <Typography variant="body1">
            <strong>Category:</strong> {category}
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ pl: 4 }}>
          <strong>Subcategory:</strong> {subcategory}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <MonetizationOnIcon color="success" />
          <Typography variant="body1">
            <strong>Max Amount:</strong> {maxAmount}
          </Typography>
        </Stack>
      </Stack>


      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={onDelete}
        >
          Delete
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2E7D32',
            '&:hover': { backgroundColor: '#1B5E20' }
          }}
          endIcon={<ArrowForwardIcon />}
          onClick={onContinue}
        >
          Continue
        </Button>
      </Stack>
    </Paper>
  );
}
