import * as React from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  TextField,
  IconButton,
  MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { BASE_URL, toastAlert } from '../../utils';
import { apiEndPoints } from '../../constant/apiEndPoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function LoanModal({ open, setOpen, handleClose, setRefresh }) {
  const categories = [
    {
      category: "Wedding",
      subCategories: ["Valima", "Jahez", "Furniture"]
    },
    {
      category: "Business",
      subCategories: ["Shop Setup", "Stall", "Machinery"]
    },
    {
      category: "Home Construction",
      subCategories: ["Structure", "Finishing"]
    },
    {
      category: "Education",
      subCategories: ["University Fees", "Child Fee"]
    }
  ];

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      title: '',
      category: '',
      subCategory: '',
      maxAmount: '',
      tenure: '',
      desc: ''
    }
  });

  const selectedCategory = watch('category');
  const availableSubCategories =
    categories.find((c) => c.category === selectedCategory)?.subCategories || [];

  const onSubmit = async (data) => {
    try {
      console.log("data", data)
      setLoading(true);
      const api = `${BASE_URL}${apiEndPoints.loanCreate}`;
      const response = await axios.post(api, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      });
      console.log("response", response)
      reset()
      toastAlert({
        type: "success",
        message: "Loan Created Successfully!"
      });

      setLoading(false);
      setRefresh((prev) => !prev);
      handleClose();
    } catch (error) {
      setLoading(false);
      toastAlert({
        type: "error",
        message: error?.response?.data?.message || error.message
      });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-loan-modal"
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
          <Typography variant="h5" fontWeight="bold" color="#1B5E20">
            Create Loan
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="title"
            rules={{ required: 'Title is required' }}
            render={({ field }) => (
              <TextField label="Loan Title" fullWidth variant="outlined" {...field} />
            )}
          />

          <Controller
            control={control}
            name="category"
            rules={{ required: 'Category is required' }}
            render={({ field }) => (
              <TextField select label="Category" fullWidth {...field}>
                {categories.map((cat) => (
                  <MenuItem key={cat.category} value={cat.category}>
                    {cat.category}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Controller
            control={control}
            name="subCategory"
            rules={{ required: 'Sub Category is required' }}
            render={({ field }) => (
              <TextField select label="Subcategory" fullWidth {...field} disabled={!selectedCategory}>
                {availableSubCategories.map((sub) => (
                  <MenuItem key={sub} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Controller
            control={control}
            name="desc"
            render={({ field }) => (
              <TextField label="Description" fullWidth variant="outlined" multiline rows={2} {...field} />
            )}
          />

          <Controller
            control={control}
            name="tenure"
            render={({ field }) => (
              <TextField label="Tenure (in months)" fullWidth variant="outlined" {...field} />
            )}
          />

          <Controller
            control={control}
            name="maxAmount"
            render={({ field }) => (
              <TextField label="Max Amount" fullWidth variant="outlined" {...field} />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#2E7D32' }}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Loan"}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
