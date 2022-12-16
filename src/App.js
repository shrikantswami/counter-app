// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/about';
import SignUp from './Pages/signup';
import Navbar from './components/Navbar/index';
// import ProfileForm from './components/Forms/ResumeDataForm';
import Form from './components/Forms/ResumeDataForm';
import PageNotFound from './Pages/PageNotFound/index';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      
      <Router>
      <Navbar />
      <switch>
      <Routes>
        
        <Route path='/about' element={ < About / >} />
        <Route path='/sign-up' element={ < SignUp / > } />
        <Route path='/Edit-Profile' element={ < Form / >  } />
        <Route path='/page-not-found' element ={ < PageNotFound / >} title="Page Not Found" />
        
      </Routes>
      </switch>
    </Router>
    </div>
    
  );
}

export default App;
