
import './App.css';
import Navbar from './components/Navi';
import Greeting from './components/greeting';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar name="NavBar"/>
        <Greeting name="Emir" age="21"/>
        
       
        <Footer/>       
      </div>
    </div>
  );
}

export default App;