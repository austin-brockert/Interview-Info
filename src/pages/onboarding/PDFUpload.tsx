import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PDFUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFilePreview(null);
    }
  };

  const handleAction = () => {
    navigate('/bio');
  };

  return (
    <React.Fragment>
      <Header progress={70} />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 p-5">
        <div className="w-full md:w-1/2 text-left px-4 md:px-8">
          <h1 className="text-3xl font-medium mb-4">Upload a PDF of your available work</h1>
          <p className="text-xl text-slate-500 mb-4">If you don’t have it ready, no worries. You can always upload it later.</p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 bg-[#F3F4F6] rounded-2xl w-full max-w-lg">
            <label htmlFor="work-deck" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-300 cursor-pointer text-sm">
              <span>Select a file to upload</span>
              <input
                type="file"
                id="work-deck"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt"
                style={{ display: 'none' }}
              />
            </label>
            {filePreview && file?.type === "application/pdf" ? (
              <object data={filePreview} type="application/pdf" width="200" height="200">PDF Preview Not Available</object>
            ) : (
              <div className="text-defaultgray-600">{file ? file.name : ""}</div>
            )}
            {!filePreview && <p className="text-sm text-slate-500">PDF, Word Document, or Plain Text File (20MB max)</p>}
          </div>
          <button
            onClick={handleAction}
            className="mt-4 px-6 md:px-12 py-2 md:py-4 text-lg md:text-xl rounded-full bg-transparent text-black hover:bg-[#181414] hover:text-white transition duration-150 ease-in-out font-medium border border-black flex items-center justify-center gap-4"
          >
            {filePreview ? "Continue" : "Skip"} <FaArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PDFUpload;
