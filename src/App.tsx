import React from 'react';                                      // Importa React para poder utilizar JSX
import './App.css';                                             // Importa estilos CSS para este componente
import MainMenu from './componentes/MainMenu';                  // Importa el componente MainMenu desde su archivo
import Footer from './componentes/Footer';                      // Importa el componente Footer desde su archivo
import Contador from './componentes/Contador';                  // Importa el componente Contador desde su archivo
import Rueda from './componentes/Rueda';                        // Importa el componente Rueda desde su archivo
import InformacionComponent from './componentes/Informacion';   // Importa el componente InformacionComponent desde su archivo
import Denuncia from './componentes/Denuncia';                  // Importa el componente Denuncia desde su archivo

const App: React.FC = () => {
    return (
        <div className="App">  {/* Contenedor principal de la aplicación con clase CSS "App" */}
            <header>
                <MainMenu />  {/* Renderiza el componente MainMenu en el encabezado */}
            </header>
            <div className="app-container">  {/* Contenedor principal del contenido de la aplicación */}
                <div className="welcome-container" id="inicio">  {/* Contenedor de bienvenida con ID "inicio" */}
                    <div className="container">
                        <h1 className="display-4">CYBERSEGURIDAD DEL FBI</h1>  {/* Título principal */}
                        <p className="lead">Bienvenido a nuestra página de ciberseguridad.</p>  {/* Párrafo de introducción */}
                    </div>
                </div>
                <div className="user-input-container">
                    {/* Componente para la entrada de usuario */}
                    {/**/}
                </div>
                <div className="rueda-position">
                    <Rueda />  {/* Renderiza el componente Rueda en una posición específica */}
                </div>
                <div className="denuncia-position">
                    <Denuncia />  {/* Renderiza el componente Denuncia en una posición específica */}
                </div>
                <div>
                    <InformacionComponent />  {/* Renderiza el componente InformacionComponent */}
                </div>
            </div>
            <Contador />  {/* Renderiza el componente Contador al final del contenedor principal */}
            <Footer />  {/* Renderiza el componente Footer al final de la aplicación */}
        </div>
    );
};

export default App;  // Exporta el componente App para ser utilizado en otros archivos
