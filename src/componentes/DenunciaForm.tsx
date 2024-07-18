import React, { useState, useEffect } from 'react';

interface DenunciaFormProps {
    agregarDenuncia: (denuncia: any) => void;
    actualizarDenuncia: (denuncia: any) => void;
    editandoId: number | null;
    setEditandoId: (id: number | null) => void;
    denunciasList: any[];
}

const DenunciaForm: React.FC<DenunciaFormProps> = ({
    agregarDenuncia,
    actualizarDenuncia,
    editandoId,
    setEditandoId,
    denunciasList
}) => {
    const [nombre, setNombre] = useState<string>('');
    const [rut, setRut] = useState<string>('');
    const [contacto, setContacto] = useState<string>('');
    const [descripcion, setDescripcion] = useState<string>('');

    useEffect(() => {
        const denunciaSeleccionada = denunciasList.find(denuncia => denuncia.id === editandoId);
        if (denunciaSeleccionada) {
            setNombre(denunciaSeleccionada.nombre);
            setRut(denunciaSeleccionada.rut);
            setContacto(denunciaSeleccionada.contacto);
            setDescripcion(denunciaSeleccionada.descripcion);
        } else {
            setNombre('');
            setRut('');
            setContacto('');
            setDescripcion('');
        }
    }, [editandoId, denunciasList]);

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^[A-Za-z\s]+$/.test(value) || value === '') {
            setNombre(value);
        }
    };

    const handleRutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toUpperCase();
        if (/^[A-Za-z0-9\-]+$/.test(value) || value === '') {
            setRut(value);
        }
    };

    const handleContactoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setContacto(value);
    };

    const handleDescripcionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setDescripcion(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (editandoId !== null) {
            actualizarDenuncia({
                id: editandoId,
                nombre,
                rut,
                contacto,
                descripcion
            });
        } else {
            agregarDenuncia({
                id: denunciasList.length + 1,
                nombre,
                rut,
                contacto,
                descripcion
            });
        }
        setNombre('');
        setRut('');
        setContacto('');
        setDescripcion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre}
                onChange={handleNombreChange}
                placeholder="Nombre del denunciante"
                required
            />
            <input
                type="text"
                value={rut}
                onChange={handleRutChange}
                placeholder="RUT del denunciante"
                required
            />
            <input
                type="text"
                value={contacto}
                onChange={handleContactoChange}
                placeholder="Contacto (email o teléfono)"
                required
            />
            <input
                type="text"
                value={descripcion}
                onChange={handleDescripcionChange}
                placeholder="Descripción de la denuncia"
                required
            />
            <button type="submit">{editandoId !== null ? 'Actualizar' : 'Agregar'}</button>
            {editandoId !== null && (
                <button type="button" onClick={() => setEditandoId(null)}>Cancelar</button>
            )}
        </form>
    );
};

export default DenunciaForm;
