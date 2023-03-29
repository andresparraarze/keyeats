import './App.css';
import Footermain from './components/Footermain';
import Homemain from './components/Homemain';
import Homesecondary from './components/Homesecondary';
import './components/Navbar'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homemain/>
      <Homesecondary/>
      <Footermain/>
    </div>
  );
}

export default App;
