import * as React from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  TextField,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';

export default function SignUpModal({ open, setOpen, handleClose }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cnic: '',
      name: '',
      email: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="signup-modal-title"
      aria-describedby="signup-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 4
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight="bold" color="#1B5E20" >
            Sign Up
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack
          component="form"
          spacing={2}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name="cnic"
            rules={{ required: 'CNIC is required' }}
            render={({ field }) => (
              <TextField label="CNIC" fullWidth variant="outlined" {...field} />
            )}
          />
          <Controller
            control={control}
            name="name"
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField label="Name" fullWidth variant="outlined" {...field} />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={{ required: 'Email is required' }}
            render={({ field }) => (
              <TextField label="Email" fullWidth variant="outlined" {...field} />
            )}
          />

          <Button type="submit" variant="contained" sx={{ backgroundColor: '#2E7D32' }}>
            Register
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
