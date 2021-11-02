import { useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import SignIn from './SignIn';

const projectID = 'c34ac969-a14d-4730-a5e1-7c758be438ba';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [visivel, setVisivel] = useState('login');

  const socket = io('http://dev.digitro.com/callcontrol/');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      socket.emit(('USER_CONNECT', {
        // eslint-disable-next-line object-shorthand
        username: username,
        maxCalls: 8 }));
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Senha ou Usuário incorretos.');
    }
  };

  function novoUsuario() {
    setVisivel('signIn');
  }

  if (visivel === 'signIn') return <SignIn cadastrado={() => setVisivel('login')} />;

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Dígitro</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Usuário" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Senha" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Conectar</span>
            </button>
          </div>
          <div align="center">
            <span style={{ color: 'white' }}>Você não tem conta? </span>
            <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={novoUsuario}>Cadastre-se</span>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
