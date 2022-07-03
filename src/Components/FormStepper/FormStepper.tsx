import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

export default function DotsMobileStepper(
  { activeStep, handleSubmit }: any,
) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNext = () => {
    // handleSubmit();
    switch (activeStep) {
      case 0:
        navigate('/details/2', { replace: true });
        break;
      case 1:
        navigate('/details/3', { replace: true });
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    // handleSubmit();
    switch (activeStep) {
      case 1:
        navigate('/details', { replace: true });
        break;
      case 2:
        navigate('/details/2', { replace: true });
        break;
      default:
        break;
    }
  };

  return (
    <MobileStepper
      style={{
        boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.5)',
        borderRadius: '5px',
      }}
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={(
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === 2}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      )}
      backButton={(
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      )}
    />
  );
}
