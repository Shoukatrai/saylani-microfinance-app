import React, { useState } from 'react';
import {
  Box,
  Typography,
  MenuItem,
  TextField,
  Button,
  Stack,
  Divider
} from '@mui/material';

const categories = {
  'Wedding Loan': ['Valima', 'Jahez', 'Furniture'],
  'Home Construction': ['Structure', 'Finishing'],
  'Business Startup': ['Shop Setup', 'Stall', 'Machinery'],
  'Education Loan': ['University Fees', 'Child Fee']
};

export default function LoanCalculator() {
  const [category, setCategory] = useState('');
  const [sub, setSub] = useState('');
  const [principal, setPrincipal] = useState('');
  const [deposit, setDeposit] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const rate = 10; // Default flat interest rate for estimation
    const loanAmount = Number(principal) - Number(deposit);
    const monthlyRate = rate / 12 / 100;
    const totalMonths = Number(tenure) * 12;

    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    setResult({
      loanAmount,
      emi: emi.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
     }, py: 6, backgroundColor: '#F0FDF4' }} margin={"20px"} borderRadius={"10px"} >
      <Typography variant="h4" color="#1B5E20" fontWeight={700} mb={2} textAlign={"center"}>
        Loan Calculator
      </Typography>

      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} flexWrap="wrap" useFlexGap>
        <TextField
          select
          fullWidth
          label="Loan Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSub('');
          }}
        >
          {Object.keys(categories).map((cat, i) => (
            <MenuItem key={i} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>

        <TextField
          select
          fullWidth
          label="Subcategory"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
          disabled={!category}
        >
          {category && categories[category].map((item, i) => (
            <MenuItem key={i} value={item}>{item}</MenuItem>
          ))}
        </TextField>

        <TextField
          label="Total Principal Amount"
          fullWidth
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />

        <TextField
          label="Initial Deposit"
          fullWidth
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />

        <TextField
          label="Loan Tenure (Years)"
          fullWidth
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
      </Stack>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: '#2E7D32',
          '&:hover': { backgroundColor: '#1B5E20' },
          px: 4
        }}
        onClick={handleCalculate}
      >
        Calculate
      </Button>

      {/* Results */}
      {result && (
        <Box mt={4} p={3} sx={{ backgroundColor: '#fff', borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h6" color="#1B5E20" fontWeight={600}>
            Estimated Breakdown
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography>Loan Amount: <strong>PKR {result.loanAmount}</strong></Typography>
          <Typography>Monthly EMI: <strong>PKR {result.emi}</strong></Typography>
          <Typography>Total Payment: <strong>PKR {result.totalPayment}</strong></Typography>
          <Typography>Total Interest: <strong>PKR {result.totalInterest}</strong></Typography>
        </Box>
      )}
    </Box>
  );
}
