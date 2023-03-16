import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import NavBar from './components/NavBarComponent/NavBar';

function App() {

  return (
    <div className="App">
<Header/>
<NavBar/>
<Footer/>
    </div>
  );
}

export default App;
