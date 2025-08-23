import { Box, Grid, Paper, Typography, Button, Divider } from "@mui/material";
import Navbar from "../../../components/Navbar";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";

const Slip = () => {
  const location = useLocation();
  const application = location.state?.application;
  const qrcodeurl = location.state?.qrCodeUrl;
  const cardRef = useRef();

  const handleDownload = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "loan-details.png";
    link.click();
  };

  return (
    <>
      <Navbar />
      <Box textAlign="center" p={{ xs: 2, md: 4 }}>
        <Paper
          ref={cardRef}
          elevation={8}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 4,
            background: "linear-gradient(135deg, #f1f8e9, #ffffff)",
            maxWidth: "900px",
            width: "100%",
            margin: "auto",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* Header */}
          <Typography
            variant="h5"
            fontWeight={700}
            color="primary"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Loan Application Slip
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* Content */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Applicant Name:</strong> {application?.name}
              </Typography>
              <Typography>
                <strong>CNIC:</strong> {application?.cnic}
              </Typography>
              <Typography>
                <strong>Contact:</strong> {application?.contactNumber}
              </Typography>
              <Typography>
                <strong>Address:</strong> {application?.address}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>
                <strong>Guarantor:</strong> {application?.gurantorName}
              </Typography>
              <Typography>
                <strong>Loan Category:</strong> {application?.category}
              </Typography>
              <Typography>
                <strong>Sub Category:</strong> {application?.subCategory}
              </Typography>
              <Typography>
                <strong>Status:</strong>{" "}
                <span style={{ color: application?.status === "PENDING" ? "orange" : "green" }}>
                  {application?.status}
                </span>
              </Typography>
            </Grid>
          </Grid>

          {/* QR Code */}
          <Box mt={4} textAlign="center">
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Scan QR for Details
            </Typography>
            <Box
              sx={{
                display: "inline-block",
                p: 2,
                border: "2px dashed #4caf50",
                borderRadius: 3,
                backgroundColor: "#f9fbe7",
              }}
            >
              <img
                src={qrcodeurl}
                alt="QR Code"
                style={{ width: "150px", height: "150px" }}
              />
            </Box>
          </Box>
        </Paper>

        {/* Download Button */}
        <Button
          variant="contained"
          color="success"
          onClick={handleDownload}
          sx={{
            mt: 3,
            borderRadius: 3,
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontSize: "16px",
            boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
            "&:hover": {
              backgroundColor: "#2e7d32",
            },
          }}
        >
          Download Slip
        </Button>
      </Box>
    </>
  );
};

export default Slip;
