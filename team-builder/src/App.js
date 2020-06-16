import React, { useState } from 'react';
import logo from './logo.svg';
import { v4 as uuid } from 'uuid'
import './App.css';

function App() {
  const [ members, setMembers ] = useState(initialMember)
  const [ newForm, setNewForm ] = useState(initialForm)

  const initialMember = {
    id : uuid(),
    name : 'Shaun',
    email : 'shaundlee.0103@gmail.com',
    role : 'Frontend Developer'
  }
  const initialForm = {
    name : '',
    email : '',
    role : ''
  }



  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
