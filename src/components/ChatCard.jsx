import React, { useContext } from 'react';
import { ChatEngineContext } from 'react-chat-engine';
import { IconeChat } from './Icons';
/* eslint-disable react/destructuring-assignment */
const ChatCard = (chat) => {
  const { activeChat } = useContext(ChatEngineContext);
  console.log(chat);
  if (!chat || chat === null || chat === undefined || activeChat === 0 || activeChat === null) return '';
  return (
    <>
      {activeChat !== null && activeChat !== 0 && (
      <div className="content">
        <div className="card-content">
          <div style={{ backgroundColor: '#ffede6', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
            <div style={{ width: '35px', color: '#ff8303' }}>
              {IconeChat}
            </div>
          </div>
          <div className="card-info">
            <div style={{ fontWeight: 'bold', color: '#03254c' }}>
              {localStorage.getItem('username') === 'suporte' ? chat.chat.people[0].person.first_name : chat.chat.people[1].person.first_name}
            </div>
            <div style={{ fontWeight: 'bold', color: '#707070' }}>
              {chat.chat.title}
            </div>
          </div>
          <div className="card-time">
            <div style={{ fontSize: '16px', color: '#707070' }}>
              {((chat.chat.created).replace('.', 'T')).split('T', 2)[1]}
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ChatCard;

