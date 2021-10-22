import './App.css';
import Paso1 from './components/Paso1/Paso1';
import Paso2 from './components/Paso2/Paso2';
import Paso3 from './components/Paso3/Paso3';

function App() {
  return (
    <div className="container">
        <main className="main-content wrapper"> 
          <form action="">
            <Paso1 />
            <Paso2 />
            <Paso3 />
          </form>
        </main>
    </div>
  );
}

export default App;
