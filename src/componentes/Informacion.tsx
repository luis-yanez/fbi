import React from 'react';

const InformacionComponent: React.FC = () => {
  const handleRedirect = () => {
    window.open('https://api.nasa.gov/', '_blank'); 
  };

  return (
    <div style={{
      position: 'absolute',
      top: '500px',
      left: '1000px',
      backgroundColor: 'rgba(248, 249, 250, 0.5)', 
      padding: '0.5rem',
      border: '1px solid #dee2e6',
      borderRadius: '1px',
      color: '#000', 
      fontSize: '12px' 
    }}>
      <h2 style={{ color: '#000', fontSize: '1.3rem' }}>Información Importante</h2>
      <p style={{ fontSize: '0.8rem', lineHeight: '1.5', color: '#000' }}>
        Esta sección contiene información crucial para la seguridad cibernética.
        <br/> 
        Mantén tu información protegida siguiendo nuestras recomendaciones.
      </p>
      <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
        <li style={{ color: '#000', fontSize: '0.8rem' }}>Utiliza contraseñas seguras y cámbialas regularmente.</li>
        <li style={{ color: '#000', fontSize: '0.8rem' }}>No compartas información confidencial en sitios no seguros.</li>
        <li style={{ color: '#000', fontSize: '0.8rem' }}>Mantén actualizado tu software de seguridad.</li>
      </ul>
      <button onClick={handleRedirect} style={{
        marginTop: '1rem',
        fontSize: '0.8rem',
        backgroundColor: '#000',
        color: '#FFFFFF', 
        borderRadius: '20px', 
        padding: '0.5rem 1rem', 
        border: 'none', 
        cursor: 'pointer' 
      }}>
        API-NASA
      </button>
    </div>
  );
}

export default InformacionComponent;
