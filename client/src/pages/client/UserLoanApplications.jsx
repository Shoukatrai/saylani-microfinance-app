import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { BASE_URL } from "../../utils";
import { apiEndPoints } from "../../constant/apiEndPoints";

const UserLoanApplications = () => {
  
  const fetchLoans = async () => {
    try {
      const api = `${BASE_URL}${apiEndPoints}`
      const response = await fetch('/api/loans'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Handle the fetched data as needed
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  useEffect(() => {
    fetchLoans();
  }, []);
  return (
    <div>
      <Navbar />
      
    </div>
  );
};

export default UserLoanApplications;
