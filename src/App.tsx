import React from 'react';
import './App.css';
import MainMenu from './componentes/MainMenu';
import Footer from './componentes/Footer';
import Contador from './componentes/Contador';
import Rueda from './componentes/Rueda';
import InformacionComponent from './componentes/Informacion';
import Denuncia from './componentes/Denuncia';

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <MainMenu />
            </header>
            <div className="app-container">
                <div className="welcome-container" id="inicio">
                    <div className="container">
                        <h1 className="display-4">CYBERSEGURIDAD DEL FBI</h1>
                        <p className="lead">Bienvenido a nuestra página de ciberseguridad.</p>
                    </div>
                </div>
                <div className="user-input-container">
                    {}
                </div>
                <div className="rueda-position">
                    <Rueda />
                </div>
                <div className="denuncia-position">
                    <Denuncia />
                </div>
                <div>
                    <InformacionComponent />
                </div>
            </div>
            <Contador />
            <Footer />
        </div>
    );
};

export default App;
