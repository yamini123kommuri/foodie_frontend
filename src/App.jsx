// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CountryPage from './pages/CountryPage';
import RecipePage from './pages/RecipePage';
import Navbar from './components/Navbar';
import '/src/App.css';

function App() {
    console.log('App component rendering');
    
    return (
        
        <Router>
            <AuthProvider>
                <div style={{ padding: '20px' }}>
                    <h1>Foodie Book App</h1>
                    <Navbar />
                    <div className="container">
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                            <Route path="/country/:id" element={<PrivateRoute><CountryPage /></PrivateRoute>} />
                            <Route path="/recipe/:id" element={<PrivateRoute><RecipePage /></PrivateRoute>} />
                            
                        </Routes>

                    </div>
                     
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;