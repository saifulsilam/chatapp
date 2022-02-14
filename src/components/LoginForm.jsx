import React, { useState } from 'react';
import axios from 'axios';

const LoginForm=()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        const authObject={'project-ID':"eb99701e-d6d3-4200-932d-8339fbfa3ec7", 'User-Name':username, 'User-Secret':password};
      
        try {
            //username | password => chatengine -> give message
            await axios.get('https://api.chatengine.io/chats', {headers:authObject})  
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
            // works out -> logged in
        } catch (error) {
            setError('Oops, Incorrect Credentials. ')        //error -> try with new user name....
        }
        
       
       
        
    }

    return (
        <div className="wrapper ">
            <div className="form">
                <h1 className="chat_title">Online ClassRoom</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="username" required/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required/>
            <div align="center">
                <button type="submit" className="button">
                    <span>Start Chatting</span>
                </button>
                <h2 className="error">{error}</h2>
            </div>
                </form>
            </div>


        </div>
    );
}

export default LoginForm
