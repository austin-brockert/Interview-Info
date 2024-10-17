import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Header from '../components/Header';
import Footer from '../components/Footer';


const Auth: React.FC = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();


  useEffect(() => {
    if (isSignedIn) {
      navigate('/aboutyou'); // Adjust the path as necessary for your routing setup
    }
  }, [isSignedIn, navigate]);

  const handleAction = () => {
    navigate('/aboutyou');
  };

  const progress = 0; // Example progress value

  return (
<div>
<Header progress={progress} />
<SignedOut>
<div className="flex flex-col items-center justify-center  w-full py-8 px-4 min-h-screen">
        <SignIn/>
      </div>
</SignedOut>
<SignedIn>
  
</SignedIn>

      <Footer />
</div>
     

  );
};

export default Auth;
