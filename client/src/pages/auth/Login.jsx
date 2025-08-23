import React, { useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL, toastAlert } from "../../utils";
import { apiEndPoints } from "../../constant/apiEndPoints";
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    console.log("Location:", location);
    try {
      setLoading(true);
      const api = `${BASE_URL}${apiEndPoints.login}`;
      const response = await axios.post(api, data);

      Cookies.set("token", response.data.token, {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("type", response.data.data.userType, {
        secure: true,
        sameSite: "Strict",
      });

      toastAlert({ type: "success", message: "Login Successful" });

      const path = location?.state?.path;
      if (path) {
        return navigate("/update-password", { state: { email: data.email } });
      }
      navigate(
        response.data.data.userType === "user" ? "/" : "/admin-dashboard"
      );
    } catch (error) {
      const errMsg =
        error.response?.data?.message || error.message || "Login failed";
      toastAlert({ type: "error", message: errMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F0FDF4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 4,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          color="#1B5E20"
          fontWeight={700}
          mb={3}
          textAlign={"center"}
        >
          Login to Your Account
        </Typography>

        <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField label="Email" type="email" fullWidth {...field} />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Password"
                type="password"
                fullWidth
                {...field}
              />
            )}
          />
          <Box textAlign={"center"}>
            <Typography fontWeight={300}>
              Don't Have an Account?{" "}
              <Link
                style={{
                  color: "#2E7D32",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                to={"/create-account"}
              >
                Create Account
              </Link>
            </Typography>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#2E7D32" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
