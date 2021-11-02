import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
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
        height="90vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </>
  );
};

// infinite scroll, logout, more customizations...

export default App;
