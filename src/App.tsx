// import React from 'react';
import { useState } from 'react';
import { TestComponent } from './components/TestComponent'
import './App.css';

function App() {
  const [name, setName] = useState<string | null>('')
  const [lastName, setLastName] = useState<string | null>('')

  return (
    <>
      <TestComponent 
        name = {name}
        lastName={lastName}
        getFirstName={() => setName(prompt("What's your name?"))}
        getLastName={() => setLastName(prompt("What's your last name?"))}
      />
    </>
  );
}

export default App;
