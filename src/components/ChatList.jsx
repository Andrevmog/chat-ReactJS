// eslint-disable-next-line import/no-named-as-default
import React, { useContext } from 'react';
import { ChatEngineContext } from 'react-chat-engine';
import ChatCard from './ChatCard';
import ChatForm from './ChatForm';

const ChatFeed = (props) => {
  const { chats, creds } = props;
  const { setActiveChat, activeChat } = useContext(ChatEngineContext);
  // const chat = chats && chats[activeChat];

  const renderChatList = () => {
    const keys = Object.keys(chats);
    return keys.map((i) => (
      <div
        className="card"
        onClick={() => setActiveChat(chats[i].id)}
        style={{ cursor: 'pointer' }}
      >
        <ChatCard chat={chats[i]} />
      </div>
    ));
  };

  if (!chats) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: 'rgb(240, 240, 240)' }}>
        <h1>Para começar, inicie uma conversa</h1>
      </div>
    );
  }

  return (
    <div className="chat-list">
      <div className="chat-title-container">
        <div className="chat-title" style={{ marginLeft: '20px' }}>Atendimentos</div>
        <ChatForm creds={creds} />
        <div className="chat-subtitle" />
      </div>
      {activeChat !== 0 && renderChatList()}
    </div>
  );
};

export default ChatFeed;

