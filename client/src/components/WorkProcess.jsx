import React from 'react';
import { Box, Typography, Stack, Paper, CardActionArea, Card, CardContent } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QrCodeIcon from '@mui/icons-material/QrCode';

const steps = [
    {
        title: 'Register',
        icon: <PersonAddAltIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
        description: 'Enter your CNIC, name, and email to start the process.'
    },
    {
        title: 'Login',
        icon: <MarkEmailReadIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
        description: 'Receive your password via email and log in to your account.'
    },
    {
        title: 'Apply for Loan',
        icon: <AssignmentIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
        description: 'Choose your loan category, add guarantors, and submit the form.'
    },
    {
        title: 'Appointment Slip',
        icon: <QrCodeIcon sx={{ fontSize: 40, color: '#2E7D32' }} />,
        description: 'Download your QR slip with token and appointment details.'
    }
];

export default function WorkProcess() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    return (
        <Box
            sx={{
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 8 },
                backgroundColor: '#F0FDF4',
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                margin: "20px"
            }}
            borderRadius={"10px"}
        >
            <Typography variant="h4" textAlign="center" fontWeight={700} color="#1B5E20" mb={2}>
                How It Works
            </Typography>
            <Typography variant="subtitle1" textAlign="center" color="#357A38" mb={4}>
                A simple 4-step process to apply for an interest-free loan
            </Typography>

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                justifyContent="space-between"
                alignItems="stretch"
                useFlexGap
                flexWrap="wrap"
            >
                {steps.map((step, index) => (
                    // <Paper
                    //     key={index}
                    //     elevation={3}
                    //     sx={{
                    //         flex: 1,
                    //         minWidth: 250,
                    //         p: 3,
                    //         borderRadius: 3,
                    //         backgroundColor: '#ffffff',
                    //         textAlign: 'center',
                    //         transition: 'transform 0.2s',
                    //         '&:hover': {
                    //             transform: 'translateY(-4px)'
                    //         },
                    //         boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                    //     }}
                    // >
                    //     <Box mb={2}>{step.icon}</Box>
                    //     <Typography variant="h6" color="#1B5E20" fontWeight={600}>
                    //         {step.title}
                    //     </Typography>
                    //     <Typography variant="body2" color="#4CAF50" mt={1}>
                    //         {step.description}
                    //     </Typography>
                    // </Paper>

                    <Card>
                        <CardActionArea
                            onClick={() => setSelectedCard(index)}
                            data-active={selectedCard === index ? '' : undefined}
                            key={index}
                            sx={{
                                height: '100%',
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                    '&:hover': {
                                        backgroundColor: 'action.selectedHover',
                                    },
                                },
                                flex: 1,
                                minWidth: 250,
                                p: 3,
                                borderRadius: 3,
                                backgroundColor: '#ffffff',
                                textAlign: 'center',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-4px)'
                                },
                                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                            }}
                            
                        >
                            <Box mb={2}>{step?.icon}</Box>
                            <CardContent sx={{ height: '100%' }}>
                                <Typography variant="h6" color="#1B5E20" fontWeight={600}>
                                    {step?.title}
                                </Typography>
                                <Typography variant="body2" color="#4CAF50" mt={1}>
                                    {step?.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}
