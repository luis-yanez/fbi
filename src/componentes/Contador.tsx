import React, { useState } from 'react';
import './Contadorstyle.css'; 

const Contador: React.FC = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="contador">
            <h3>Contador de Visitas</h3>
            <div className="count">{count}</div>
            <button onClick={incrementCount} className="btn-increment">
                Incrementar
            </button>
        </div>
    );
};

export default Contador;
