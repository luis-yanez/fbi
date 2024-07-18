import React from 'react';

interface DenunciaListProps {
    denuncias: any[];
    eliminarDenuncia: (id: number) => void;
    activarEdicion: (id: number) => void;
}

const DenunciaList: React.FC<DenunciaListProps> = ({
    denuncias,
    eliminarDenuncia,
    activarEdicion
}) => {
    const [detallesVisible, setDetallesVisible] = React.useState<number | null>(null);

    const toggleDetalles = (id: number) => {
        if (detallesVisible === id) {
            setDetallesVisible(null); 
        } else {
            setDetallesVisible(id); 
        }
    };

    return (
        <ul>
            {denuncias.map(denuncia => (
                <li key={denuncia.id}>
                    {detallesVisible !== denuncia.id && (
                        <button onClick={() => toggleDetalles(denuncia.id)}>
                            {detallesVisible === denuncia.id ? 'Ocultar Detalles' : 'Ver Detalles'}
                        </button>
                    )}
                    {detallesVisible === denuncia.id && (
                        <React.Fragment>
                            <div>
                                <strong>RUT:</strong> {denuncia.rut}
                            </div>
                            <div>
                                <strong>Contacto:</strong> {denuncia.contacto}
                            </div>
                            <div>
                                <strong>Descripción:</strong> {denuncia.descripcion}
                            </div>
                            <button onClick={() => toggleDetalles(denuncia.id)}>
                                Ocultar Detalles
                            </button>
                        </React.Fragment>
                    )}
                    <button onClick={() => activarEdicion(denuncia.id)}>Editar</button>
                    <button onClick={() => eliminarDenuncia(denuncia.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default DenunciaList;
