import './App.css';
import logo from '../public/logo.png';

const App = () => {

  return (
    <>
      <div className="flex justify-items-center items-center h-screen w-screen  text-3xl text-rose-600">
          <img src={logo} alt="Plant Buddy Logo" />
          <p>Loading...</p>
      </div>
    </>
  );
}

export default App;
