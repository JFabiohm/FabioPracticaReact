import React, { useState } from 'react';
import { postRegister } from '../../services/postRegister'; 

function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButton = async (event) => {
    event.preventDefault();
    try {
      const response = await postRegister(name, email, password);
      console.log('Usuario registrado con éxito:', response);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <>
      <div id="div_background">
        <div>
          <div id="login-box">
            <p>Register</p>
            <form onSubmit={handleButton}>
              <div id="user-box">
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                 
                />
                <label>Nombre</label>
              </div>
              <div id="user-box">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  
                />
                <label>Email</label>
              </div>
              <div id="user-box">
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                
                />
                <label>Password</label>
              </div>
              <button >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormRegister;
