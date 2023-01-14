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
import NewAccount from './Pages/Accounts/NewAccount/index';
import LogIn from './Pages/Accounts/Login';
import AuthContext from './Pages/Accounts/Auth/AuthContext';
import { useState } from "react";
import Cookies from 'js-cookie';
import Sidebar from './components/Sidebar/fixedsidebar';
import { Box } from '@mui/material';
import PageHeaders  from './Pages/PageHeader';

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [accesstoken, setAccessToken] = useState(null);
  const [refreshtoken, setRefreshToken] = useState(null);
  const [logedIn, setLogedIn] = useState(false);
  let refreshToken = Cookies.get('refresh-token');
  // console.log("access token", accesstoken)
  console.log("refresh token", refreshToken)
  let updatedAccessToken = null;
  if (refreshToken && !accesstoken) {
    console.log("getting access token")
    updatedAccessToken =  fetch("http://127.0.0.1:8000/api/auth/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
              },
      body: JSON.stringify({
        refresh: refreshToken,
          })
      }).then(updatedAccessToken => updatedAccessToken.json()).then( updatedAccessToken =>{
        setAccessToken(updatedAccessToken.access);
        console.log("access token",accesstoken);
        setLogedIn(true);
      }
      ) 
  }
  else {
    console.log("already logged in")
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{accesstoken, userDetails, refreshtoken, setAccessToken, setUserDetails , setRefreshToken, logedIn, setLogedIn}} >
        <Router>
          <Box  >
          <Navbar>
             
            </Navbar> 
          
            {/* <switch> */}
              <Routes>
              
                <Route path='/' element={ < Home / >} />
                <Route path='/about' element={ < About / >} />
                <Route path='/Dashboard' element={ < Form / >  } />
                <Route path='/page-not-found' element ={ < PageNotFound / >} title="Page Not Found" />
                <Route path='/sign-up' element ={ < NewAccount / >} title="SignUp" />
                <Route path='/sign-in' element ={ < LogIn / >} title="SignIn" />
                <Route path='/account' element ={ < PageHeaders / >} title="PageHeader" />
              </Routes>
            

            {  logedIn == true && < Sidebar />   }
            </Box>
        </Router>
      </AuthContext.Provider>
    </div>
    
  );
}

export default App;
