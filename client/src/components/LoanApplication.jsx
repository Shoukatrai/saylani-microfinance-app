import React, { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { apiEndPoints } from "../constant/apiEndPoints";
import { BASE_URL, toastAlert } from "../utils";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const LoanApplication = () => {
  const location = useLocation();
  const loan = location.state?.loan; // Loan passed from route
  const loanCart = useSelector((state) => state.loan); // Loan from Redux
  console.log("Loan from Redux:", loanCart);
  const [loading, setLoading] = React.useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      contactNumber: "",
      address: "",
      cnic: "",
      category: "",
      subCategory: "",
      loanAmount: "",
      guarantorName: "",
      guarantorCnic: "",
      guarantorContactNumber: "",
      loanId: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      if (loan?._id) {
        data.loanId = loan._id;
      } else if (loanCart?.loanId) {
        data.loanId = loanCart.loanId;
      }

      const api = `${BASE_URL}${apiEndPoints.loanApply}`;
      const response = await axios.post(api, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      console.log("Response:", response);
      reset();
      toastAlert({
        type: "success",
        message: "Loan application submitted successfully!",
      });
    } catch (error) {
      toastAlert({
        type: "error",
        message: error.response?.data?.message || error.message,
      });
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loanCart?.loan?.category || loanCart?.loan?.subCategory) {
      reset({
        category: loanCart.loan.category,
        subCategory: loanCart.loan.subCategory,
      });
    } else if (loan) {
      reset({
        category: loan.category,
        subCategory: loan.subCategory,
      });
    }
  }, [loan, loanCart, reset]);

  return (
    <Box
      component={"form"}
      sx={{
        width: { xs: "90%", md: "50%" },
        margin: "auto",
        padding: 3,
        marginBlock: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        backgroundColor: "#F0FDF4",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: 2,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography
        variant="h5"
        color="#1B5E20"
        fontWeight={700}
        mb={1}
        textAlign={"center"}
      >
        Loan Application Form
      </Typography>

      {/* --- Personal Info --- */}
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Full Name" fullWidth {...field} />
        )}
      />

      <Controller
        name="cnic"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField label="CNIC" fullWidth {...field} />}
      />

      <Controller
        name="contactNumber"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Phone Number" fullWidth {...field} />
        )}
      />

      <Controller
        name="address"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            label="Address"
            multiline
            minRows={2}
            fullWidth
            {...field}
          />
        )}
      />

      {/* --- Loan Info --- */}
      <Controller
        name="category"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Loan Category" fullWidth {...field} />
        )}
      />

      <Controller
        name="subCategory"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Sub Category" fullWidth {...field} />
        )}
      />

      <Controller
        name="loanAmount"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Loan Amount" fullWidth {...field} />
        )}
      />

      {/* --- Guarantor Info --- */}
      <Controller
        name="guarantorName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Guarantor Name" fullWidth {...field} />
        )}
      />

      <Controller
        name="guarantorCnic"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Guarantor CNIC" fullWidth {...field} />
        )}
      />

      <Controller
        name="guarantorContactNumber"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Guarantor Contact Number" fullWidth {...field} />
        )}
      />

      <Button
        type="submit"
        sx={{
          backgroundColor: "#2E7D32",
          color: "#fff",
          mt: 2,
          borderRadius: 2,
          textTransform: "none",
        }}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </Box>
  );
};

export default LoanApplication;
