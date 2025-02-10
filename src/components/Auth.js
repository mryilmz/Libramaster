import React, { useState } from 'react';
import { auth } from '../firebase';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Giriş başarılı!');
    } catch (error) {
      alert('Giriş hatası: ' + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('Kayıt başarılı!');
    } catch (error) {
      alert('Kayıt hatası: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Giriş / Kayıt</h2>
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş Yap</button>
      <button onClick={handleSignUp}>Kayıt Ol</button>
    </div>
  );
}

export default Auth;