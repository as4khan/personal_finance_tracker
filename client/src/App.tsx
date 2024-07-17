import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { FinancialRecordsProvider } from './context/financial-record-context';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import financeImage1 from './assets/Finance-Picture-1.jpeg';
import financeImage2 from './assets/Finance-Picture-2.jpeg';
import logo from './assets/pft-logo1.png';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='navbar'>
          <div className='navbar-left'>
            <Link to="/">
              <img src={logo} alt="Personal Finance Tracker Logo" className='navbar-logo'/>
            </Link>
          </div>
          <div className='navbar-right signed-out-buttons'>
            <SignedIn>
              <UserButton />
              <Navigate to="/dashboard" />
            </SignedIn>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
          </div>
        </div>
        <Routes>
          <Route path='/' element={
            <div>
              <SignedOut>
                <div className="home-section">
                  <div className='home-content'>
                    <img src={financeImage1} alt="Finance 1" className='home-image'/>
                    <div className='home-title'>
                      <h1>Welcome to...</h1>
                      <h1>P-Finance Tracker</h1>
                    </div>
                  </div>
                </div>
              </SignedOut>
              <div id='about' className='about-section'>
                <div className='about-content'>
                  <div className='about-description'>
                    <h2>What is P-Finance Tracker?</h2>
                    <p>Finance-Tracker is an innovative and user-friendly website created to provide comprehensive financial tracking and analysis...</p>
                  </div>
                  <img src={financeImage2} alt="Finance 2" className='about-image'/>
                </div>
              </div>
            </div>
          } />
          <Route path='/dashboard' element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
