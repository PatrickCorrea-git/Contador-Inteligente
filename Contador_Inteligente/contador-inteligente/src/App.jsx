import { useState, useRef, useEffect } from 'react';
import './style.css'

function App() {
  // Estado do contador
  const [count, setCount] = useState(0);

  //Referência para contar as renderizações
  const renderCount = useRef(0);

  // Controle para verificar se é a primeira renderização
  const isFirstRender = useRef(true);

  // Efeito para atualizar o controlador de renderizações
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      renderCount.current += 1;
    }
  });

  // Função para resetar os valores
  const handleReset = () => {
    setCount(0); // Resetando o contador de valores
    renderCount.current = 0; // Resetando o contador de renderizações

  };

  return (
    <div>
      <h1>Contador Inteligente: {count}</h1>
      <p>Renderizações: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={handleReset}>Resetar</button>
    </div>
  );
}

export default App;
