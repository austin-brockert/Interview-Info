import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons'; // Changed from faArrowUp to faImage
import { AiOutlinePicture } from "react-icons/ai"; // Changed from AiOutlineCloudUpload for relevance
import { FaArrowRight } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const CoverPhotoUpload: React.FC = () => {
  const { user } = useUser();
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null); // Changed from pdfFile and pdfPreview
  const navigate = useNavigate();

  const handleCoverPhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) { // Changed to accept image types
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    navigate('/pdfupload'); // Adjust the navigate path as needed
  };

  const userName = user?.firstName || "there";

  return (
    <React.Fragment>
      <Header progress={50} />
      <div className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-4 md:gap-10 p-2 md:p-5"
           style={{ backgroundColor: '#FAFAF9', minWidth: '320px' }}>
        <div className="w-full md:w-1/2 text-left md:text-left px-4 md:px-8">
          <h1 className="text-2xl md:text-3xl font-medium mb-4">
            {coverPhoto ? "Looking good, " + userName + "!" : `Nice to meet you, ${userName}!`}
          </h1>
          <p className="text-md md:text-lg">
            {coverPhoto ? "You can always change your cover photo in your settings after you’re all set up." : 
            "Let’s choose a cover photo for your profile. This will be what people see at the top of your profile page."}
          </p>
          {coverPhoto && (
            <button
              className="mt-4 px-6 md:px-12 py-2 md:py-4 mt-8 text-lg md:text-xl rounded-full bg-[#181414] text-white hover:bg-opacity-90 transition duration-150 ease-in-out font-semibold flex items-center justify-center space-x-2 gap-4"
              onClick={handleContinue}
            >
              Continue <FaArrowRight />
            </button>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center gap-8 px-4 py-8 relative bg-[#F3F4F6] rounded-2xl overflow-hidden">
            {coverPhoto ? (
              // Display the uploaded cover photo
              <img src={coverPhoto} alt="Cover Preview" className="w-full h-auto rounded-2xl" />
            ) : (
              <>
                <div className="text-lg text-gray-600">Drag and drop or click to select a cover photo</div>
                <div className="w-16 h-16 bg-[#181414] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faImage} className="text-white" size="2x" />
                </div>
              </>
            )}
            <label htmlFor="cover-photo-upload" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full overflow-hidden border border-slate-300 cursor-pointer text-sm">
              <p>Select a file to upload</p>
              <AiOutlinePicture />
            </label>
            <input
              type="file"
              onChange={handleCoverPhotoUpload}
              accept="image/png, image/jpeg" // Accept JPEG and PNG formats
              style={{ display: 'none' }}
              id="cover-photo-upload"
            />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CoverPhotoUpload;
