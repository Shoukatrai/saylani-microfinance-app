import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import LoanRequestCard from '../../../components/Cards/LoanRequestCard'
import axios from 'axios'

const LoanRequestPage = () => {
    const fetchLaonReq = async()=>{
        try {
            const api = ``
            const response = await axios.get(api)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchLaonReq()
    },[])
    return (
        <div>
            <Navbar />
            <LoanRequestCard />
        </div>
    )
}

export default LoanRequestPage
