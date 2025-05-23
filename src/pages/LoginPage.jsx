import { auth, provider } from '../util/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      toast.error('Login failed');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) navigate('/admin');
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="h-[500px] flex items-center justify-center bg-[#242423] font-raleway space-x-3">
      <button onClick={handleLogin} className="bg-white text-black px-4 py-2 rounded rounded-full">
        <span className="flex items-center gap-2"><FcGoogle size={20} />
          Sign in with Google
        </span>
      </button>
    </div>
  );
};

export default LoginPage;