import './App.css';
import People from './components/People';
import { MyContextProvider } from './Context/MyContextProvider';

function App() {
  
  return (
    <div className="container">
        <h1>Stars Wars</h1>
        <hr className='line' />
        <h2>Characters</h2>
        <MyContextProvider>
          <People/>
        </MyContextProvider>
    </div>
  );
}

export default App;
