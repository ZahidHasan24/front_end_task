import { toast } from 'react-toastify';
const Toast = {
  success: (message, position = 'top-right') =>
    toast.success(message, {
      position: position,
      autoClose: 3000,
      hideProgressBar: false,
      theme: 'dark'
    }),
  error: (message, position = 'top-right') =>
    toast.error(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      theme: 'dark'
    })
};

export default Toast;