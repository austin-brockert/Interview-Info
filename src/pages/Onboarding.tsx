import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import ClaimUser from './onboarding/ClaimUser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Onboarding: React.FC = () => {
  const { isSignedIn } = useUser();
  const [currentStep, setCurrentStep] = useState('claimUser');

  useEffect(() => {
    // If the user is signed in and on the 'auth' step, move to 'aboutYou'
    if (isSignedIn && currentStep === 'auth') {
      setCurrentStep('aboutYou');
    }
  }, [isSignedIn, currentStep]);

  const goToNextStep = () => {
    if (currentStep === 'claimUser') {
      setCurrentStep('auth');
    } else if (currentStep === 'auth') {
      // The actual move to 'aboutYou' is handled by the useEffect hook when isSignedIn changes to true
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Header progress={0} />

      {currentStep === 'claimUser' && <ClaimUser goToNextStep={goToNextStep} />}

      <Footer />
    </div>
  );
}

export default Onboarding;
