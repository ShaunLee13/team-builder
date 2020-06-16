import React, { useState } from 'react';
import logo from './logo.svg';
import { v4 as uuid } from 'uuid'
import './App.css';
import MemberForm from './components/MemberForm';
import TeamMember from './components/TeamMember';

const initialMember = [
  {
    id : uuid(),
    name : 'Shaun',
    email : 'shaundlee.0103@gmail.com',
    role : 'Frontend Developer'
  }
]
const initialForm = {
  name : '',
  email : '',
  role : ''
}


function App() {
  const [ newForm, setNewForm ] = useState(initialForm)
  const [ members, setMembers ] = useState(initialMember)
  

  return (
    <div className="App">
      <header className="App-header">
        <MemberForm values={newForm} onChange='' onSubmit='' />

        {members.map(member => {
          return (
            <TeamMember key={member.id} details={member}/>
            )
          })
        }
        
      </header>
    </div>
  );
}

export default App;
