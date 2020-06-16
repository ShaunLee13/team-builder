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
    role : 'Front-End Engineer'
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
  
  const onChange = event => {
    const { name, value } = event.target

    setNewForm(
      {
        ...newForm, [name]:value
      })
  }

   const onSubmit = event => {
    event.preventDefault()

    if( !newForm.name || !newForm.email || !newForm.role) {
      return 
    }

    const newMember = {...newForm, id:uuid()}

    setMembers([...members, newMember])
    setNewForm(initialForm)
  }

  return (
    <div className="App">
      <header className="App-header">
        <MemberForm value={newForm} onChange={onChange} onSubmit={onSubmit} />

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
