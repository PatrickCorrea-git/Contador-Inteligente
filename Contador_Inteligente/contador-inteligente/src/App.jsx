import { useState, useRef, useEffect } from "react";
import './style.css'

function App() {
  // Estados principais
  const [count, setCount] = useState(0);
  const [countRender, setRenderCount] = useState(0);

  // Controle da primeira render
  const isFirstRender = useRef(true);

  // Efeito que reage ao contador
  useEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false;
      return;
    }

    setRenderCount(prev => prev + 1); // conta renderização após mudanças no count
  },[count]); 

  // Função reset
  const handleReset = () => {
    setCount(0);
    setRenderCount(0);
    isFirstRender.current = true;
  }

  return (
    <div>
     <h1>Contador Inteligente: {count}</h1>
     <p>Renderizações: {countRender}</p>
     <button className="btn" onClick={() => setCount(count + 1)}>+</button>
     <button className="btn" onClick={() => setCount(count - 1)}>-</button>
     <button id="reset" onClick={handleReset}>Resetar</button>
    </div>
  );
}

export default App;