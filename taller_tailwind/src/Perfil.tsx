import React from 'react';

const Perfil: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 w-full max-w-sm text-center shadow-md">
        <img
          src="https://i.pinimg.com/736x/b8/ab/4c/b8ab4c2dead2101fd34bfa3b470b9786.jpg"
          alt="Perfil"
          className="w-28 h-28 mx-auto rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">Ana María Zuñiga</h1>
        <p className="text-blue-600 dark:text-green-400 text-base mt-2 mb-4">Desarrollador Web</p>
        <p className="text-sm mb-5">
          En el momento estoy aprendiendo React y Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
