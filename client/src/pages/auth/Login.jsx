import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => {
        console.log('Login Data:', data);
        // Call your login API here
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#F0FDF4',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2
            }}
        >
            <Box
                sx={{
                    maxWidth: 400,
                    width: '100%',
                    p: 4,
                    bgcolor: 'white',
                    borderRadius: 2,
                    boxShadow: 3
                }}
            >
                <Typography variant="h5" color="#1B5E20" fontWeight={700} mb={3}>
                    Login to Your Account
                </Typography>

                <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="Email" type="email" fullWidth {...field} />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="Password" type="password" fullWidth {...field} />}
                    />
                    <Box textAlign={"center"}>
                        <Typography fontWeight={300} >
                            Don't Have an Account? <Link style={{
                                color:"#2E7D32", 
                                textDecoration :"none",
                                fontWeight : "500"
                            }} to={"/create-account"}>Create Account</Link>
                        </Typography>
                    </Box>
                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#2E7D32' }}>
                        Login
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
