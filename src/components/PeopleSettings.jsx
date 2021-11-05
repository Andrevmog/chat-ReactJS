/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { ChatEngineContext, PhotosSettings } from 'react-chat-engine';
import axios from 'axios';
import Delayed from './Delayed';
// eslint-disable-next-line import/no-named-as-default
const ChatFeed = (props) => {
  // const chat = chats && chats[activeChat];
  const { activeChat, chats, setActiveChat } = useContext(ChatEngineContext);
  console.log(chats);
  const [error, setError] = useState('');
  const projectID = 'c34ac969-a14d-4730-a5e1-7c758be438ba';
  const handleFinalizar = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
      'User-Name': 'suporte',
      'User-Secret': 'suporte',
    };

    try {
      await axios.delete(`https://api.chatengine.io/chats/${activeChat}`, { headers: authObject });
      setError('');
      window.location.reload();
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };
  return (
    <>
      <Delayed waitBeforeShow={0}>
        {localStorage.getItem('username') === 'suporte' && activeChat !== null && activeChat !== 0 && (
        <div className="chat-info">
          <div className="chat-info-container">
            <div className="chat-info-title" style={{ marginLeft: '20px', marginBottom: '20px' }}>Informações da Chamada:</div>
            <div className="chat-info-title" style={{ marginLeft: '20px' }}>CallId: {activeChat}</div>
            <div className="chat-info-title" style={{ marginLeft: '20px' }}>Midia: Chat</div>
            <div className="chat-info-title" style={{ marginLeft: '20px' }}>Data Inicial: {((chats[activeChat].created).replace('.', 'T')).split('T', 2)[1]}</div>
            <div className="chat-info-title" style={{ marginLeft: '20px' }}>Serviço: {chats[activeChat].title}</div>
            <div className="chat-info-title" style={{ marginLeft: '20px' }}>Origem: {chats[activeChat].admin.first_name}</div>
          </div>
        </div>
        )}
        <PhotosSettings />
        {localStorage.getItem('username') === 'suporte' && activeChat !== null && activeChat !== 0 && (
        <div style={{ display: 'flex', float: 'right' }}>
          <button type="submit" className="finalizar">
            <span onClick={handleFinalizar}>Finalizar</span>
          </button>
        </div>
        )}
      </Delayed>
    </>
  );
};

export default ChatFeed;

