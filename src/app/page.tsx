import { useAuth } from './context/AuthContext';
import FileList from './components/FileList';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>All Files</h1>
      {user ? (
        <div>
          <button onClick={logout}>Logout</button>
          <FileList />
        </div>
      ) : (
        <p>Please login to see the files</p>
      )}
    </div>
  );
};

export default Home;
