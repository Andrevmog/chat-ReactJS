import { useState } from 'react';
import axios from 'axios';

const privateKey = '4d5c456a-da81-4cd7-9956-b4db02155e34';

const SignIn = (cadastrado) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  function voltar() {
    window.location.reload();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'PRIVATE-KEY': privateKey,
    };

    const article = {
      // eslint-disable-next-line object-shorthand
      username: username,
      first_name: firstName,
      last_name: lastName,
      secret: password,
      custom_json: '{ high_score: 2000 }' };

    try {
      await axios.post('https://api.chatengine.io/users/', article, { headers: authObject });

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Usuário" required />
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="Primeiro nome" required />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="Último nome" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Senha" required />
          <div align="center">
            <button type="submit" className="button">
              <span onClick={cadastrado}>Cadastrar</span>
            </button>
          </div>
        </form>
        <div align="center">
          <button type="button">
            <span onClick={voltar}>Voltar</span>
          </button>
        </div>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default SignIn;
