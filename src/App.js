
import './App.css';
import { Banner } from './components/Banner';
import { Studies } from './components/Studies';
import { Knowledge } from './components/Knowledge';
import { Proyect } from './components/Proyect';
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
        <Banner/>
        <Studies/>
        <Knowledge/>
        <Proyect/>
        <Footer/>
    </div>
  );
}

export default App;
