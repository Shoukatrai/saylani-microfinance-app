import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Stepper,
  Step,
  StepButton,
  TextField,
  Stack
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL, toastAlert } from '../utils';
import { apiEndPoints } from '../constant/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const steps = ['Personal Information', 'Guarantors', 'Loan Details'];

export default function LoanFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [loading, setLoading] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loan = useSelector((state) => state.loan.loan);
  console.log("loan", loan)
  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      contactNumber: '',
      cnic: '',
      guarantors: [
        { name: '', email: '', location: '', cnic: '' },
        { name: '', email: '', location: '', cnic: '' }
      ],
      laonAmout: '',
      category: '',
      subCategory: '',
      address: '',
      tenure: ''
    }
  });

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = async () => {
    const valid = await trigger();
    if (!valid) return;

    const newStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newStep);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleStep = (step) => () => setActiveStep(step);
  const handleComplete = async () => {
    const valid = await trigger();
    if (!valid) return;
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const onSubmit = async (data) => {
    console.log('Form submitted:', data);
    try {
      setLoading(true)
      const api = `${BASE_URL}${apiEndPoints.loanApply}`
      const response = await axios.post(api, data)
      console.log("response", response)
      setLoading(false)
      toastAlert({
        type: "success",
        message: response.data.message
      })
    } catch (error) {
      console.log(error)
      setLoading(false)
      toastAlert({
        type: "error",
        message: error.message
      })
    }
  };

  useEffect(() => {
    if (loan) {
      reset({
        category: loan.category || '',
        subCategory: loan.subCategory || '',
        laonAmout: loan.maxAmount || '',
        tenure: loan.tenure || '',
        guarantors: [
          { name: '', email: '', location: '', cnic: '' },
          { name: '', email: '', location: '', cnic: '' }
        ]
      });
    }
  }, [loan]);



  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={2}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Full Name" />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Email" />
              )}
            />
            <Controller
              name="cnic"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="CNIC" />
              )}
            />
            <Controller
              name="contactNumber"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Phone Number" />
              )}
            />
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Address" multiline />
              )}
            />
          </Stack>
        );

      case 1:
        const guarantors = getValues('guarantors');
        return (
          <Stack spacing={3}>
            {guarantors.map((_, idx) => (
              <Stack key={idx} spacing={2}>
                <Typography fontWeight={600}>Guarantor {idx + 1}</Typography>
                <Controller
                  name={`guarantors.${idx}.name`}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Name" />
                  )}
                />
                <Controller
                  name={`guarantors.${idx}.email`}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Email" />
                  )}
                />
                <Controller
                  name={`guarantors.${idx}.location`}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Location" />
                  )}
                />
                <Controller
                  name={`guarantors.${idx}.cnic`}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="CNIC" />
                  )}
                />
              </Stack>
            ))}
          </Stack>
        );

      case 2:
        return (
          <Stack spacing={2}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <TextField  {...field} label="Category" />
              )}
            />
            <Controller
              name="subCategory"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Subcategory" />
              )}
            />
            <Controller
              name="laonAmout"
              control={control}

              render={({ field }) => (
                <TextField {...field} label="Loan Amount" />
              )}
            />
            <Controller
              name="tenure"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="tenure (months)" />
              )}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 2, backgroundColor: '#2E7D32', '&:hover': { backgroundColor: '#1B5E20' } }}
              disabled={loading}
            >
              {loading ? "Applying" : "Apply Now"}
            </Button>
          </Stack>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{
      width: '100%', maxWidth: 600, mx: 'auto', p: {
        xs: 2,
        md: 3,
        lg: 5
      }, mt: "20px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "10PX"
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper nonLinear activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="green" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>

        <Box>{renderStepContent(activeStep)}</Box>

        <Stack direction="row" justifyContent="space-between" mt={4}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>

          {!isLastStep() && (
            <Stack direction="row" spacing={2}>
              <Button onClick={handleComplete} variant="outlined" color="success">
                Complete Step
              </Button>
              <Button onClick={handleNext} variant="contained" sx={{ backgroundColor: '#2E7D32' }}>
                Next
              </Button>
            </Stack>
          )}
        </Stack>

        {allStepsCompleted() && (
          <Box mt={4} textAlign="center">
            <Typography>All steps completed!</Typography>
            <Button onClick={handleReset} sx={{ mt: 2 }}>
              Reset
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
}
