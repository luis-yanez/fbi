import React from 'react';

const Rueda: React.FC = () => {
    return (
        <div style={styles.container}>
            <style>
                {`
                    @keyframes rotate {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                    body, html {
                        height: 100%;
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 50px;
                        height: 50px;
                        background-color: #0072ff; 
                        color: white;
                        font-size: 20px;
                        font-family: Arial, sans-serif;
                        border-radius: 30px;
                        animation: rotate 4s linear infinite;
                        margin-top: 180px; 
                        margin-left: -30px; 
                    }
                `}
            </style>
            <div className="box">
                FBI
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        width: '100vw', 
    }
};

export default Rueda;
