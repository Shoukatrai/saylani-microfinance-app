import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { Button, Stack } from '@mui/material'
import { Add } from '@mui/icons-material'
import LaonModal from '../../../components/modals/LoanModal'
import { apiEndPoints } from '../../../constant/apiEndPoints'
import axios from 'axios'
import { BASE_URL, toastAlert } from '../../../utils'
import AdminLoanCard from '../../../components/Cards/AdminLoanCard'
import Cookies from "js-cookie"


const LaonCategory = () => {
  const [openModal, setOpenModal] = useState(false)
  const [refresh, setRefresh] = React.useState(false)
  const [data, setData] = useState([])
  const [message , setMessage] = useState("")
  const handleClose = () => {
    setOpenModal(false)
  }

  const fetchLoans = async () => {
    try {
      const api = `${BASE_URL}${apiEndPoints.loanGetAll}`;
      const response = await axios.get(api , {
        headers : {
          Authorization : `Bearer ${Cookies.get("token")}`
        }
      })
      console.log("response", response)
      setMessage(response.data.message)
      if(!response.data.status){
       return setMessage("Please Log in to get Loan Categories")
      }
      setData(response.data.data)
    } catch (error) {
      console.log(error)
      toastAlert({
        type : "error",
        message : message || error.message
      })
    }
  }

  useEffect(() => {
    fetchLoans()
  }, [refresh])
  return (
    <AdminLayout dashTitle={'All Laon Categories'}>
      <Stack flexDirection={"row"} gap={3} margin={"30px"} flexWrap={"wrap"}>
        {data.map((loan) => {
          return <AdminLoanCard key={loan._id} loan={loan} setRefresh={setRefresh} />
        })}
      </Stack>
      <LaonModal setRefresh={setRefresh} open={openModal} setOpen={setOpenModal} handleClose={handleClose} />
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          borderRadius: '50%',
          minWidth: 56,
          minHeight: 56,
          boxShadow: 3,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: "green"
        }}
        onClick={() => setOpenModal(true)}
      >
        <Add fontSize="large" />
      </Button>
    </AdminLayout>
  )
}

export default LaonCategory
