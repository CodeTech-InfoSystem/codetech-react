import { auth } from '../util/firebaseConfig';
import useAuthRequired from '../hooks/useAuthRequired';

function Admin() {
  const user =  useAuthRequired();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Welcome, {user?.email}</h1>
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default Admin;
