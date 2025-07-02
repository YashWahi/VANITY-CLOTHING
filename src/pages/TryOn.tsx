import { useState } from 'react';
import { motion } from 'framer-motion';

const TryOn = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>('');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedPhoto(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-6"
      >
        Virtual Try-On
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 mb-8 max-w-xl text-center"
      >
        Upload your photo once and see how our clothes look on you! (This is a demo feature. No photos are stored on our servers.)
      </motion.p>
      {!uploadedPhoto ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-900/50 rounded-lg p-8 flex flex-col items-center"
        >
          <label className="block mb-4 text-gray-300 font-medium">Upload your photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="mb-4 text-white"
          />
          <span className="text-gray-500 text-sm">Accepted formats: JPG, PNG, JPEG</span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            src={uploadedPhoto}
            alt="Uploaded Preview"
            className="w-64 h-80 object-cover rounded-lg shadow-lg mb-4 border-4 border-orange-500"
          />
          <span className="text-gray-400 mb-2">{photoName}</span>
          <button
            onClick={() => setUploadedPhoto(null)}
            className="bg-orange-500 text-black px-6 py-2 rounded font-semibold hover:bg-orange-400 transition-colors duration-200"
          >
            Upload a different photo
          </button>
        </motion.div>
      )}
      {/* Future: Add clothing overlay selection here */}
    </div>
  );
};

export default TryOn; 