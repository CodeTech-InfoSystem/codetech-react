import { useState, useEffect } from 'react';
import { auth } from '../util/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const useAuthRequired = (required = true) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user && required) {
        navigate('/login');
      }
      setUser(user);
    });

    return () => unsubscribe();
  }, [navigate]);

  return user;
};

export default useAuthRequired;
