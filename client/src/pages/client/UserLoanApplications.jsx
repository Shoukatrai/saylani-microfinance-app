import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { BASE_URL, toastAlert } from "../../utils";
import { apiEndPoints } from "../../constant/apiEndPoints";
import axios from "axios";
import Cookies from "js-cookie";
import { Box, CircularProgress, Typography } from "@mui/material";
import ApplicationCard from "../../components/Cards/ApplicationCard";

const UserLoanApplications = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLoans = async () => {
    try {
      const api = `${BASE_URL}${apiEndPoints.loanApplications}`;
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching loans:", error.message);
      toastAlert({
        type: "error",
        message: error.response?.data?.message || "Failed to fetch loan applications",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 2,
          p: 3,
          minHeight: "80vh",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : data.length === 0 ? (
          <Typography variant="h6" color="text.secondary">
            No loan applications found.
          </Typography>
        ) : (
          data.map((loan) => <ApplicationCard key={loan._id} loan={loan} />)
        )}
      </Box>
    </div>
  );
};

export default UserLoanApplications;
