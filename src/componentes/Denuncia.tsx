import React, { useState, useEffect } from 'react';
import DenunciaForm from './DenunciaForm';
import DenunciaList from './DenunciaList';

const Denuncia: React.FC = () => {
    const [denunciasList, setDenunciasList] = useState<any[]>([]);
    const [editandoId, setEditandoId] = useState<number | null>(null);

   
    useEffect(() => {
        const storedDenuncias = localStorage.getItem('denuncias');
        if (storedDenuncias) {
            setDenunciasList(JSON.parse(storedDenuncias));
        }
    }, []); 

   
    useEffect(() => {
        localStorage.setItem('denuncias', JSON.stringify(denunciasList));
    }, [denunciasList]); 

    const agregarDenuncia = (nuevaDenuncia: any) => {
        const nuevaLista = [...denunciasList, nuevaDenuncia];
        setDenunciasList(nuevaLista);
    };

    const eliminarDenuncia = (id: number) => {
        const nuevaLista = denunciasList.filter(denuncia => denuncia.id !== id);
        setDenunciasList(nuevaLista);
        if (editandoId === id) {
            setEditandoId(null);
        }
    };

    const actualizarDenuncia = (denunciaActualizada: any) => {
        const denunciasActualizadas = denunciasList.map(denuncia => {
            if (denuncia.id === denunciaActualizada.id) {
                return denunciaActualizada;
            }
            return denuncia;
        });
        setDenunciasList(denunciasActualizadas);
        setEditandoId(null);
    };

    return (
        <div className="denuncia-container">
            <h2>Denuncias</h2>
            <DenunciaForm
                agregarDenuncia={agregarDenuncia}
                actualizarDenuncia={actualizarDenuncia}
                editandoId={editandoId}
                setEditandoId={setEditandoId}
                denunciasList={denunciasList}
            />
            <DenunciaList
                denuncias={denunciasList}
                eliminarDenuncia={eliminarDenuncia}
                activarEdicion={setEditandoId}
            />
        </div>
    );
};

export default Denuncia;
