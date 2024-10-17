// Username.tsx
import React, { useState } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface UsernameProps {
  goToNextStep: () => void; // Add this line to accept goToNextStep
}

const Username: React.FC<UsernameProps> = ({ goToNextStep }) => {
  const [username, setUsername] = useState('');

  const isUsernameValid = username.length > 3;
  const navigate = useNavigate()

  // Assume this function is called when the username is successfully claimed
  const handleClaimUsername = () => {
    // Logic to claim the username...
    // If successful, move to the next step
    navigate("/auth");
  };


  return (
    <div className="flex flex-col items-center justify-center  w-full py-8 px-4"> {/* Added px-4 for padding on the sides on smaller screens */}
      <div className="text-center mb-6 md:mb-8 text-2xl md:text-3xl"> {/* Adjusted margins and text size for smaller screens */}
        Claim your unique username
      </div>
      <div className="flex items-center border-2 border-slate-300 rounded-full px-4 md:px-12 py-4 md:py-6 w-full md:w-1/2 max-w-lg relative mb-6 md:mb-8"> {/* Adjusted padding, width, and margins for responsiveness */}
        <span className="text-black text-xl md:text-3xl mr-2">linkto.art/</span>
        <input
          type="text"
          className="flex-1 text-xl md:text-3xl py-1 font-medium outline-none"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ borderColor: '#9CA3AF', backgroundColor: 'transparent', color: isUsernameValid ? '#059669' : '' }}
        />
        {isUsernameValid && <FaCheck className="absolute right-4 md:right-10 text-green-600 text-2xl" />}
      </div>
      {isUsernameValid && (
      <button
          className="px-6 md:px-12 py-2 md:py-4 text-lg md:text-xl rounded-full bg-[#181414] text-white hover:bg-opacity-90 transition duration-150 ease-in-out font-semibold flex items-center justify-center space-x-2"
          onClick={handleClaimUsername} // Use the button to trigger handleClaimUsername
        >
          <span>Claim</span>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default Username;
