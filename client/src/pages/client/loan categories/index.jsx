import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../../../utils";
import { apiEndPoints } from "../../../constant/apiEndPoints";
import { Stack } from "@mui/material";
import LoanCatCard from "../../../components/Cards/LoanCatCard";

const LoanCategories = () => {
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

  useEffect(() => {
    fetchAllLaonCategories();
  }, []);
  return (
    <div>
      <Navbar />
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3} sx={{
        mt: 4, mb: 4,
        px: 2
      }}>
        {data.map((loan) => {
          return <LoanCatCard loan={loan} />;
        })}
      </Stack>
    </div>
  );
};

export default LoanCategories;
