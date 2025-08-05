import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL, toastAlert } from '../../utils';
import { apiEndPoints } from '../../constant/apiEndPoints';
import axios from 'axios';
import Cookies from "js-cookie"

const PasswordChange = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            oldPassword: '',
            newPassword: ''
        }
    });

    const onSubmit = async (data) => {
        console.log('Login Data:', data);
        const email = location.state.email

        try {
            setLoading(true)
            const api = `${BASE_URL}${apiEndPoints.updatePassword}`
            const updatePassObj = {
                ...data,
                email
            }
            console.log("updatePassObj", updatePassObj)
            const response = await axios.patch(api, updatePassObj)
            console.log("response", response)
            setLoading(false)
            toastAlert({
                type: "success",
                message: "Password Updated!"
            })
            navigate("/loan")
        } catch (error) {
            setLoading(false)
            toastAlert({
                type: "error",
                message: error.message
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
                    Please Change your Password
                </Typography>

                <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="oldPassword"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="Enter Temp Password" type="password" fullWidth {...field} />}
                    />
                    <Controller
                        name="newPassword"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField label="Enter New Password" type="password" fullWidth {...field} />}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#2E7D32' }}
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Change Password"}
                    </Button>

                </Stack>
            </Box>
        </Box>
    )
}

export default PasswordChange
