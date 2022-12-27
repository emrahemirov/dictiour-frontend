export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const setAuthToken = (value: string) => {
  localStorage.setItem('token', value);
};

export const removeAuthToken = () => {
  localStorage.removeItem('token');
};
