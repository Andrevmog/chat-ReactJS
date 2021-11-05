import { ChatEngine } from 'react-chat-engine';
import ChatCard from './components/ChatCard';
import ChatList from './components/ChatList';
import ChatForm from './components/ChatForm';
import LoginForm from './components/LoginForm';
import PeopleSettings from './components/PeopleSettings';
import './App.css';

const projectID = 'c34ac969-a14d-4730-a5e1-7c758be438ba';

const App = () => {
  const disconnect = () => {
    localStorage.clear();
    window.location.reload();
  };
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <>
      <div className="Disconnect" style={{ justifyContent: 'space-between', display: 'flex', backgroundColor: 'rgb(24, 144, 255)', padding: '15px', alignItems: 'center' }}>
        <span className="account-name">{localStorage.getItem('username')}</span>
        <button type="submit" className="disconnect-button">
          <span onClick={disconnect}>Desconectar</span>
        </button>
      </div>
      <ChatEngine
        height="88vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        renderChatCard={(chat, index) => <ChatCard {...(chat, index)} />}
        renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
        renderNewChatForm={(creds) => <ChatForm {...creds} />}
        renderChatSettings={(chat) => <PeopleSettings {...chat} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </>
  );
};

// infinite scroll, logout, more customizations...

export default App;
