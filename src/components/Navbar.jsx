// client/src/components/Navbar.js
/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Foodie Book</Link>
            </div>
            
            <div className="navbar-links">
                {isAuthenticated ? (
                    <>
                        <span>Welcome, {user?.username}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;   */


















/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Foodie Book</Link>
            </div>
            
            <div className="navbar-links">
                {isAuthenticated ? (
                    <div className="profile-section">
                        <div className="profile-dropdown">
                            <div className="profile-trigger">
                                <img 
                                    src={user?.profilePic || '/default-avatar.png'} 
                                    alt={user?.username} 
                                    className="avatar"
                                />
                                <span>{user?.username}</span>
                            </div>
                            <div className="dropdown-content">
                                <div className="profile-info">
                                    <img 
                                        src={user?.profilePic || '/default-avatar.png'} 
                                        alt={user?.username} 
                                        className="avatar-large"
                                    />
                                    <div>
                                        <h4>{user?.username}</h4>
                                        <p>{user?.email}</p>
                                        {user?.bio && <p className="bio">{user?.bio}</p>}
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="logout-btn">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;*/






import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Foodie Book</Link>
            </div>
            
            <div className="navbar-links">
                {isAuthenticated ? (
                    <>
                        
                        
                        <div className="profile-section">
                            <div className="profile-dropdown">
                                <div className="profile-trigger">
                                    <img 
                                        src={user?.profilePic || '/default-avatar.png'} 
                                        alt={user?.username} 
                                        className="avatar"
                                    />
                                    <span>{user?.username}</span>
                                </div>
                                <div className="dropdown-content">
                                    <div className="profile-info">
                                        <img 
                                            src={user?.profilePic || '/default-avatar.png'} 
                                            alt={user?.username} 
                                            className="avatar-large"
                                        />
                                        <div>
                                            <h4>{user?.username}</h4>
                                            <p>{user?.email}</p>
                                            {user?.bio && <p className="bio">{user?.bio}</p>}
                                        </div>
                                    </div>
                                    <button onClick={handleLogout} className="logout-btn">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;