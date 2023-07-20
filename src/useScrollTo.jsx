import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollTo = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
export default useScrollTo;
