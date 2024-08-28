import { useState } from 'react';
import './App.css';
import { ClaseTres } from './Components/claseTres';

function App() {
  const [nombre, setNombre] = useState('');
  return (
    <>
      <ClaseTres nombre={nombre} setNombre={setNombre} />
    </>
  );
}

export default App;
