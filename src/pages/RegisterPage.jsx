import React, { useState } from 'react';
import '../assets/RegisterPage.css'; 

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
    } else if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
    } else {
      alert('Registro exitoso!');
    }
  };

  return (
    <div className="register-page">
      <div className="overlay"></div>
      <div className="form-container">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Confirmar Contraseña" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
