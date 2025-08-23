import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Button } from '@mui/material';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { useDispatch } from 'react-redux';
import { addLoan } from '../../redux/slices/loan';

const categoryIconMap = {
  "Wedding": <FavoriteIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
  "Business": <BusinessCenterIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
  "Home Construction": <HomeWorkIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
  "Education": <SchoolIcon sx={{ fontSize: 40, color: '#2E7D32' }} />
};

export default function LoanCatCard({ loan }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleApply = () => {
    navigate("/loan-apply-now" , {
      state: {
        loan: loan
      }
    })
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
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        maxWidth: 300,
        minWidth: 250,
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          {categoryIconMap[loan.category] || <FavoriteIcon />}

          <Typography variant="h6" fontWeight={600} color="#1B5E20">
            {loan?.title}
          </Typography>
        </Box>
        <Typography variant="body2" color="#357A38" fontWeight={500}>
          Category : {loan.category}
        </Typography>
        <Typography variant="body2" color="#357A38" fontWeight={500}>
          Subcategory : {loan.subCategory}
        </Typography>


        <Typography variant="body2" mt={1} color="#2E7D32">
          Max Loan: <strong>{loan?.maxAmount}</strong>
        </Typography>
        <Typography variant="body2" mt={1} color="#2E7D32">
          Tenure: <strong>{loan?.tenure}</strong> monnths
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
          console.log("Loan about to dispatch:", loan)
          dispatch(addLoan(loan));
          return  handleApply();
        }}
      >
        Apply Now
      </Button>
    </Card >
  );
}
