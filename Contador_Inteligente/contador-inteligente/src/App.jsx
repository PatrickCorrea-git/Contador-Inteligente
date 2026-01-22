import { useState, useRef, useEffect } from "react";
import './style.css'

function App() {
  // Estados principais
  const [count, setCount] = useState(0);
  const [countRender, setCountRender] = useState(0);

  // Controle da primeira render
  const isFirstRender = useRef (true);


  return (
    <div>
     
    </div>
  );
}

export default App;