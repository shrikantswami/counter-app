// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/about';
import SignUp from './Pages/signup';
import Navbar from './components/Navbar/index';
// import ProfileForm from './components/Forms/ResumeDataForm';
import Form from './components/Forms/ResumeDataForm';
import PageNotFound from './Pages/PageNotFound/index';
import Home from './Pages/Home/Home';
import NewAccount from './Pages/Accounts/NewAccount/index'
import LogIn from './Pages/Accounts/Login';
import AuthContext from './Pages/Accounts/Auth/AuthContext';
import { useState } from "react";


function App() {
  const [userDetails, setUserDetails] = useState({});
  const [accesstoken, setAccessToken] = useState(null);
  const [refreshtoken, setRefreshToken] = useState(null);
  const [logedIn, setLogedIn] = useState(false);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />zl
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AuthContext.Provider value={{accesstoken, userDetails, refreshtoken, setAccessToken, setUserDetails , setRefreshToken, logedIn, setLogedIn}} >
        <Router>
          <Navbar />
            <switch>
              <Routes>
                <Route path='/' element={ < Home / >} />
                <Route path='/about' element={ < About / >} />
                <Route path='/Dashboard' element={ < Form / >  } />
                <Route path='/page-not-found' element ={ < PageNotFound / >} title="Page Not Found" />
                <Route path='/sign-up' element ={ < NewAccount / >} title="SignUp" />
                <Route path='/sign-in' element ={ < LogIn / >} title="SignIn" />
              </Routes>
            </switch>
          </Router>
      </AuthContext.Provider>
    </div>
    
  );
}

export default App;
