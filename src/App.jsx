import './App.css';
import People from './components/People';
import { MyContextProvider } from './Context/MyContextProvider'

function App() {
  
  return (
    <div className="container">
        <h1>Stars Wars</h1>
        <MyContextProvider>
          <People/>
        </MyContextProvider>
       
    </div>
  );
}

export default App;
