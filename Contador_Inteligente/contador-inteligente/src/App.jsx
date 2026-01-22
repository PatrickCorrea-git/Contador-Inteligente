import { useState, useRef, useEffect } from "react";
import './style.css'

function App() {
  // Estados principais
  const [count, setCount] = useState(0);
  const [countRender, setRenderCount] = useState(0);

  // Controle da primeira render
  const isFirstRender = useRef (true);

  // Efeito que reage ao contador
  useEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false;
      return;
    } else {
    setRenderCount(prev => prev + 1);
    }
  },[count]);


  return (
    <div>
     
    </div>
  );
}

export default App;