import { Box, Button, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import heroImage from "../assets/eb503907-dd73-4dd6-831c-f571c5057a0f.png"
import { green } from '@mui/material/colors'
const HeroSection = () => {
    return (
        <div>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                margin="20px"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    backgroundColor: '#F0FDF4',
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 4 },
                    textAlign: { xs: 'center', md: 'left' },
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                }}
                borderRadius={"10px"}
            >
                {/* Left Content */}
                <Box flex={1}>
                    <Typography variant="h3" sx={{ color: '#1B5E20', fontWeight: 700 }}>
                        Empowering Lives Through Qarze Hasana
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#2E7D32', mt: 2 }}>
                        Saylani Microfinance Program provides interest-free loans to support families, businesses, and futures.
                    </Typography>

                    <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#2E7D32',
                                '&:hover': { backgroundColor: '#1B5E20' },
                                color: '#fff',
                                borderRadius: '8px',
                                px: 4
                            }}
                        >
                            Apply Now
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#1B5E20',
                                color: '#1B5E20',
                                '&:hover': {
                                    backgroundColor: '#A5D6A7',
                                    borderColor: '#1B5E20'
                                },
                                borderRadius: '8px',
                                px: 4
                            }}
                        >
                            Calculate Loan
                        </Button>
                    </Box>
                </Box>

                {/* Right Image */}
                <Box
                    component="img"
                    src={heroImage}
                    alt="Hero"
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        display: { xs: 'none', md: 'block' }, // Hide on small screens
                        ml: { md: 4 }
                    }}
                />
            </Stack>
           


        </div>
    )
}

export default HeroSection
