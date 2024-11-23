import React, { useState } from 'react';
import '../styles/login.css'; // Para el estilo del login
import logo from '../commons/image.png'; // Asegúrate de tener la imagen en public

const Login = ({ onLogin }) => { // Recibiendo onLogin como prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
  
    try {
      const response = await fetch('/userData.json');
      if (!response.ok) {
        throw new Error('Failed to load the JSON file');
      }
      const userData = await response.json();
  
      if (username === userData.username && password === userData.password) {
        // Si el login es exitoso, ejecuta la función onLogin
        onLogin(); // Esto redirige al dashboard
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('There was a problem loading the credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Mountain Creek Advisors Logo" className="logo" />
        <h2>Welcome</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>User</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
