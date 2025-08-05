import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Button } from '@mui/material';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function LoanCard({ loan, handleOpen }) {
  const navigate = useNavigate()
  const handleApply = () => {
    navigate("/application")
  }
  return (
    <Card
      sx={{
        backgroundColor: 'white',
        borderRadius: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          {loan?.icon}
          <Typography variant="h6" fontWeight={600} color="#1B5E20">
            {loan?.title}
          </Typography>
        </Box>

        <Typography variant="body2" color="#357A38" fontWeight={500}>
          Subcategories:
        </Typography>
        <ul style={{ marginTop: 4, paddingLeft: 20 }}>
          {loan?.sub?.map((category, index) => {
            return <li key={index} style={{ color: '#4CAF50', fontSize: '0.875rem' }}>
              {category}
            </li>
          })}
        </ul>

        <Typography variant="body2" mt={1} color="#2E7D32">
          Max Loan: <strong>{loan?.max}</strong>
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#2E7D32',
          '&:hover': { backgroundColor: '#1B5E20' },
          color: '#fff',
          mt: 2,
          borderRadius: 2,
          textTransform: 'none'
        }}
        onClick={() => {
          const token = Cookies.get("token");
          return !token ?  handleOpen() :handleApply();
        }}
      >
        Apply Now
      </Button>
    </Card >
  );
}
