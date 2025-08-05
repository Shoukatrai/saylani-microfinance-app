import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { apiEndPoints } from '../../constant/apiEndPoints';
import axios from "axios"
import { BASE_URL, toastAlert } from '../../utils';
export default function SignupPage() {
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            cnic: '',
            address: '',
            contactNbr: '',
            password: ''
        }
    });

    const onSubmit = async(data) => {
        console.log('Signup Data:', data);
        try {
            setLoading(true)
            const api = `${BASE_URL}${apiEndPoints.signup}`
            const response = await axios.post(api , data)
            console.log("response" , response)
            toastAlert({
                type : "success",
                message : "Sign up Successful"
            })
            setLoading(false)
            navigate("/login")
        } catch (error) {
            setLoading(false)
             toastAlert({
                type : "error",
                message : error.message
            })
        }
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
                <Typography variant="h5" color="#1B5E20" fontWeight={700} mb={3} textAlign={"center"}>
                    Create Your Account
                </Typography>

                <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="Full Name" fullWidth {...field} />}
                    />
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
                        render={({ field }) => <TextField label="Password"
                            fullWidth
                            {...field}
                            type='password'
                        />
                        }
                    />
                    <Controller
                        name="cnic"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="CNIC"
                            fullWidth
                            {...field}
                        />
                        }
                    />
                    <Controller
                        name="contactNbr"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="Contact Number" type='tel' fullWidth {...field} />}
                    />
                    <Controller
                        name="address"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="Address" multiline maxRows={2} type='tel' fullWidth {...field} />}
                    />
                    <Box textAlign={"center"}>
                        <Typography fontWeight={300} >
                            Have an Account? <Link style={{
                                color: "#2E7D32",
                                textDecoration: "none",
                                fontWeight: "500"
                            }} to={"/login"}>Login</Link>
                        </Typography>
                    </Box>

                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#2E7D32' }}>
                        {loading ? "Signning up..." :"Sign Up"}
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
