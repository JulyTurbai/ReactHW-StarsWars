import './App.css';
import Characters from './components/Characters';
import Films from './components/Films';
import ModalWindow from './components/ModalWindow';
import { StarsProvider } from './store/persons/provider';



function App() {
  
  return (
    <StarsProvider>
    <div className="container">
        <h1>Stars Wars</h1>
        <hr className='line' />
        <div className="menu">
          <Characters/>
          {/* <Films/> */}
          <button>Starships</button>
          <button>Vehicles</button>
          <button>Planets</button>
          <button>Species</button>
          </div>
        <ModalWindow />
    </div>
    </StarsProvider>
  );
}

export default App;
