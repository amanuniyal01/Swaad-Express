
export const checkValidData = (email, password) => {
   
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) {
    return "Email is not valid";
  }

  if (!password || password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null; 
};
