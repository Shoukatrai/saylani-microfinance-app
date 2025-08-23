import { Box, Typography } from "@mui/material";
import React from "react";

const ApplicationCard = ({ loan }) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          margin: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
          }}
        >
          Loan Category : {loan.category}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
          }}
        >
          Sub Category : {loan.subCategory}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          Amount Requested : {loan.amountRequested}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "8px",
          }}
        >
          Status : {loan.status}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "8px",
            color:
              loan.status === "approved"
                ? "green"
                : loan.status === "rejected"
                ? "red"
                : "orange",
          }}
        >
          Admin Remarks : {loan.adminRemarks || "N/A"}
        </Typography>
      </Box>
    </>
  );
};

export default ApplicationCard;
