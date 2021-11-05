/* eslint-disable object-shorthand */
import { useState } from 'react';
import axios from 'axios';
import { IconePlus } from './Icons';
/* eslint-disable react/destructuring-assignment */

const ChatCard = (props) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const projectID = 'c34ac969-a14d-4730-a5e1-7c758be438ba';
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
      'User-Name': 'suporte',
      'User-Secret': 'suporte',
    };

    const article = {
      // eslint-disable-next-line object-shorthand
      usernames: [props.creds.userName, 'suporte'],
      title: title,
      is_direct_chat: 'false',
    };

    try {
      await axios.put('https://api.chatengine.io/chats/', article, { headers: authObject });
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };
  if (props === null || props.creds?.userName === 'suporte' || props === undefined) return '';
  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', height: '50px', alignItems: 'center', justifyContent: 'center', paddingLeft: '50px' }}>
        <input type="text" className="chat-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do chamado" required />
        <div align="center">
          <button type="submit" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(24, 144, 255)', borderRadius: '50%', cursor: 'pointer', border: 'none' }}>
            <div style={{ width: '25px', color: 'white', display: 'flex', justifyContent: 'center' }}>
              {IconePlus}
            </div>
          </button>
        </div>
      </form>
      <h1>{error}</h1>
    </>
  );
};

export default ChatCard;

