// import { useRef, useState } from 'react';

// export default function FileUpload() {
//   const [file, setFile] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const resetFileInput = () => {
//     fileInputRef.current.value = ''; // ✅ Allowed, resets the file input
//     setFile
export const isValideFirstName = (firstName) => {
  const numbers = "0123456789";
  const symbols = "@#$%^&*!()_+<>?/";
  const validateName = (firstName) => {
    if (firstName === "") {
      return true;
    }
    const firstNameRegex = /^[a-zA-Z]+$/;
    return firstNameRegex.test(firstName);
  };
  
  for (let i = 0; i < numbers.length; i++) {
    if (firstName.includes(numbers[i])) {
      return false;
    }
  }
  for (let i = 0; i < symbols.length; i++) {
    if (firstName.includes(symbols[i])) {
      return false;
    }
  }
};
