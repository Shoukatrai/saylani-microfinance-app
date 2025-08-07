import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, toastAlert } from '../../utils';
import { apiEndPoints } from '../../constant/apiEndPoints';

export default function AdminLoanCard({ loan , setRefresh}) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const handleStatus = async (id, isActive) => {
    try {
      setLoading(true)
      const api = `${BASE_URL}${apiEndPoints.loanStatusUpdate(id)}`
      const obj = {
        isActive: !isActive
      }
      const response = await axios.patch(api, obj)
      console.log("response", response)
      setLoading(false)
      toastAlert({
        type: "success",
        message:  isActive ? "Loan Deactivated" : "Loan Status Updated!" 
      });
      setRefresh((prev)=>!prev)
    } catch (error) {
      setLoading(false)
      toastAlert({
        type: "error",
        message: error?.response?.data?.message || error.message
      });
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: 'white',
        borderRadius: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: isSmall ? 2 : 3,
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        width: '100%',
        maxWidth: 400,
        m: 'auto'
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          {loan?.icon}
          <Typography
            variant={isSmall ? "h5" : "h4"}
            fontWeight={600}
            color="#1B5E20"
          >
            {loan?.title}
          </Typography>
        </Box>

        <Typography variant="subtitle1" color="#357A38" fontWeight={500}>
          Description: {loan?.desc}
        </Typography>

        <Typography variant="subtitle1" color="#357A38" fontWeight={500}>
          Category: {loan?.category}
        </Typography>

        <Typography variant="body2" color="#357A38" fontWeight={500}>
          Subcategory: {loan?.subCategory}
        </Typography>

        <Typography variant="body2" mt={1} color="#2E7D32">
          Max Loan: <strong>{loan?.maxAmount}</strong>
        </Typography>

        <Typography variant="body2" mt={1} color="#2E7D32">
          Tenure: <strong>{loan?.tenure}</strong> Months
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: loan.isActive ? "#1B5E20" : "#C62828",
          '&:hover': {
            backgroundColor: loan.isActive ? "#2E7D32" : "#B71C1C"
          },
          color: '#fff',
          mt: 2,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: isSmall ? 14 : 16
        }}
        onClick={() => {
          handleStatus(loan._id, loan.isActive)
        }}
      >
        {loading ? "Updating..." : loan.isActive ? "Deactivate" : "Activate"}
      </Button>
    </Card>
  );
}
