import './App.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hello}!`);
      });
  }, []);

  return (
    <>
      <h1>Hej</h1>
    </>
  );
}

export default App;
