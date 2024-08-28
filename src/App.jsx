import { useState } from 'react';
import './App.css';
import { ClaseTres } from './Components/claseTres';

function App() {
  ////Creo un estado 
  const [props, setProps] = useState('');
  return (
    <>
    {/* Paso ese estado y la funcion a mi componente */}
      <ClaseTres props={props} setProps={setProps} />
    </>
  );
}

export default App;
