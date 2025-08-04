import React from 'react'
import LoanCard from './Cards/LoanCard'
import { Box, Stack, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SignUpModal from './modals/SignUpModal';
const LoanCategory = () => {
    const [openSignUpModale, setOpenSignUpModale] = React.useState(false);
    const handleOpen = () => setOpenSignUpModale(true);
    const handleClose = () => setOpenSignUpModale(false);

    const loanCategories = [
        {
            title: 'Wedding Loans',
            icon: <FavoriteIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
            sub: ['Valima', 'Jahez', 'Furniture'],
            max: 'PKR 5 Lakh'
        },
        {
            title: 'Home Construction Loans',
            icon: <HomeWorkIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
            sub: ['Structure', 'Finishing'],
            max: 'PKR 10 Lakh'
        },
        {
            title: 'Business Startup Loans',
            icon: <BusinessCenterIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
            sub: ['Shop Setup', 'Stall', 'Machinery'],
            max: 'PKR 10 Lakh'
        },
        {
            title: 'Education Loans',
            icon: <SchoolIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
            sub: ['University Fees', 'Child Fee'],
            max: 'Based on Need'
        }
    ];
    return (
        <>
            <Box sx={{
                py: { xs: 4, md: 8 },
                px: { xs: 2, md: 4 },
                backgroundColor: '#F0FDF4',
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            }}
                margin="20px"
                borderRadius={"10px"}
            >
                <Typography variant="h4" fontWeight={700} color="#1B5E20" gutterBottom textAlign={"center"}>
                    Loan Categories We Offer
                </Typography>
                <Typography variant="subtitle1" color="#357A38" mb={4} textAlign={"center"}>
                    Interest-free loans tailored to your needs — supported by Saylani Welfare.
                </Typography>
                <Stack direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={3}>
                    {loanCategories.map((loan) => {
                        return <LoanCard loan={loan} handleOpen={handleOpen} />
                    })}
                </Stack>
                <SignUpModal
                    open={openSignUpModale}
                    setOpen={setOpenSignUpModale}
                    handleClose={handleClose}
                />
            </Box>
        </>
    )
}

export default LoanCategory
