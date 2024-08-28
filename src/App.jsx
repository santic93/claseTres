import { useState } from 'react';
import './App.css';
import { ClaseTres } from './Components/claseTres';

function App() {
  ////Creo un estado 
  const [nombre, setNombre] = useState('Santiago');
  return (
    <>
    {/* Paso ese estado y la funcion a mi componente */}
      <ClaseTres nombre={nombre} setNombre={setNombre} />
    </>
  );
}

export default App;
