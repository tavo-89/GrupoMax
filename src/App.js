import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      
      <Header />
      <Body />
      <div className="container cards">
        <Card titulo="Cómoda" habitacion="Dormitorio" src="../images/IMG_Cómoda.png" />
        <Card titulo="Silla" habitacion="Cocina" src="../images/IMG_Sillon.png" />
        <Card titulo="Mesa ratona" habitacion="Living/Comedor" src="../images/IMG_MesaRatona.png" />
      </div>
      <div className="btnVer">
        <button>Ver más</button>
      </div>

      <Footer />


    </div>
  );
}

export default App;
