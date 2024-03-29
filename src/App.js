import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
import './App.css';
import LoginForm from './components/LoginForm';

const App = ()=>{
  if(!localStorage.getItem('username')) return <LoginForm />
  return(
    <ChatEngine
      height="100vh"
      projectID="eb99701e-d6d3-4200-932d-8339fbfa3ec7"
      // userName="vabna"
      // userSecret="zxcvb"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
     />
  );
}
export default App;