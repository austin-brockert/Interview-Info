import React from 'react';
import logo from '../assets/brand/logo.svg'; // Make sure the path to your logo is correct
import { SignedIn, SignedOut } from '@clerk/clerk-react';

interface HeaderProps {
  progress: number; // Represents the progress percentage (0 to 100)
}

const Header: React.FC<HeaderProps> = ({ progress }) => {
  return (
    <header className="flex items-center text-white p-10 justify-between" style={{ backgroundColor: 'transparent', position: 'fixed', width: '100%', minWidth: '300px'}}>
      <div className="logo">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      {/* Conditionally render the progress bar */}
      {progress > 0 && (
        <div className="progress-bar bg-slate-100 rounded-full h-2 w-1/2">
          <div
            className="h-2 rounded-full"
            style={{ width: `${progress}%`, backgroundColor: '#1F2937' }}
          ></div>
        </div>
      )}
      <SignedIn>
        <span className="text-slate-800 font-semibold text-lg">Log out</span>

      </SignedIn>
      <SignedOut>
      <span className="text-slate-800 font-semibold text-lg">Log in</span>

      </SignedOut>
    </header>
  );
};

export default Header;
