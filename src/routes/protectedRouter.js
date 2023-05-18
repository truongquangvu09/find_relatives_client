import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRouter = ({ children }) => {
  const { id } = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!id && !isToastDisplayed) {
        setIsToastDisplayed(true);
        toast.error('Bạn cần phải đăng nhập!');
        navigate('/');
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [id, isToastDisplayed, navigate]);
  return id ? children : null;
};

export default ProtectedRouter;
