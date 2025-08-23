import React, { useEffect, useState } from "react";
import LoanCard from "./Cards/LoanCard";
import { Box, Button, Stack, Typography } from "@mui/material";

import SignUpModal from "./modals/SignUpModal";
import { BASE_URL, toastAlert } from "../utils";
import axios from "axios";
import { apiEndPoints } from "../constant/apiEndPoints";
const LoanCategory = () => {
  const [openSignUpModale, setOpenSignUpModale] = React.useState(false);
  const handleOpen = () => setOpenSignUpModale(true);
  const handleClose = () => setOpenSignUpModale(false);
  const [data, setData] = useState([]);

  const fetchAllLaonCategories = async () => {
    try {
      const api = `${BASE_URL}${apiEndPoints.loanGetActive}`;
      const response = await axios.get(api);
      console.log("response", response);
      setData(response.data.data);
    } catch (error) {
      toastAlert({
        type: "error",
        message: error.message,
      });
    }
  };

  const filterLoans = async (category) => {
    try {
      console.log("category", category);
      const api = `${BASE_URL}${apiEndPoints.loanFilter(category)}`;
      const response = await axios.get(api);
      console.log("response", response);
      setData(response.data.data);
    } catch (error) {
      console.log(error.message, "error");
    }
  };

  useEffect(() => {
    fetchAllLaonCategories();
  }, []);
  return (
    <>
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
          backgroundColor: "#F0FDF4",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        margin="20px"
        borderRadius={"10px"}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          color="#1B5E20"
          gutterBottom
          textAlign={"center"}
        >
          Loan Categories We Offer
        </Typography>
        <Typography
          variant="subtitle1"
          color="#357A38"
          mb={4}
          textAlign={"center"}
        >
          Interest-free loans tailored to your needs — supported by Saylani
          Welfare.
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={2}
          justifyContent={"center"}
          margin={"20px"}
          flexWrap={{ xs: "wrap" }}
        >
          <Button
            sx={{
              border: "0.1px solid green",
              color: "green",
            }}
            onClick={() => filterLoans("Wedding")}
            variant="outlined"
          >
            Wedding
          </Button>
          <Button
            sx={{
              border: "0.1px solid green",
              color: "green",
            }}
            onClick={() => filterLoans("Business")}
            variant="outlined"
          >
            Business
          </Button>
          <Button
            sx={{
              border: "0.1px solid green",
              color: "green",
            }}
            onClick={() => filterLoans("Home Construction")}
            variant="outlined"
          >
            Home Construction
          </Button>
          <Button
            sx={{
              border: "0.1px solid green",
              color: "green",
            }}
            onClick={() => filterLoans("Education")}
            variant="outlined"
          >
            Education
          </Button>
          <Button
            sx={{
              border: "0.1px solid green",
              color: "green",
            }}
            onClick={() => fetchAllLaonCategories()}
            variant="outlined"
          >
            ALL
          </Button>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
          {data.map((loan) => {
            return (
              <marquee behavior="" direction="right to left">
                <LoanCard loan={loan} handleOpen={handleOpen} />
              </marquee>
            );
          })}
        </Stack>
        <SignUpModal
          open={openSignUpModale}
          setOpen={setOpenSignUpModale}
          handleClose={handleClose}
        />
      </Box>
    </>
  );
};

export default LoanCategory;
