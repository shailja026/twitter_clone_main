import './App.css';
import SignUp from './Components/auth/SignUp';
import SignIn from './Components/auth/SignIn';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <SignUp/>
     <SignIn/>
     <Home/>
    </div>
  );
}

export default App;
