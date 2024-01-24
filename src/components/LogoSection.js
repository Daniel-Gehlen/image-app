import React, { useState } from 'react';

const LogoSection = ({ logoUrl }) => {
  const [logoSize, setLogoSize] = useState(100);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleIncreaseSize = () => {
    setLogoSize((prevSize) => Math.min(prevSize + 10, 200)); // Limitando o aumento a 200%
  };

  const handleDecreaseSize = () => {
    setLogoSize((prevSize) => Math.max(prevSize - 10, 10)); // Limitando a redução a 10%
  };

  const handleMoveRight = () => {
    setPositionX((prevPosition) => prevPosition + 10);
  };

  const handleMoveLeft = () => {
    setPositionX((prevPosition) => prevPosition - 10);
  };

  const handleMoveUp = () => {
    setPositionY((prevPosition) => prevPosition - 10);
  };

  const handleMoveDown = () => {
    setPositionY((prevPosition) => prevPosition + 10);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          id: 'logo',
          display: 'flex',
          height: '350px',
          width: '100%',
          backgroundColor: 'black',
          zIndex: 2,
          textAlign: 'center',
          marginBottom: '4px',
          justifyContent: 'flex-end',
          alignItems: 'center',
          border: isSelected ? '2px solid blue' : 'none',
          overflow: 'hidden', // Impede que o conteúdo ultrapasse os limites da div
        }}
        onClick={handleClick}
      >
        <img
          src={logoUrl}
          alt="Descrição da imagem"
          style={{
            width: '100%', // Define a largura da imagem como 100% da largura da div
            height: 'auto', // Permite que a altura seja ajustada automaticamente de acordo com a largura original
            transform: `scale(${logoSize / 100}) translate(${positionX}px, ${positionY}px)`,
          }}
        />
      </div>

      {isSelected && (
        <div
          style={{
            position: 'absolute',
            bottom: '5px',
            left: '5px',
            zIndex: 2,
            display: 'flex',
            gap: '5px',
            transform: 'scale(3)', // Aumenta o tamanho dos botões em 100%

          }}
        >
          <button onClick={handleDecreaseSize}>-</button>
          <button onClick={handleIncreaseSize}>+</button>
          <button onClick={handleMoveLeft}>←</button>
          <button onClick={handleMoveRight}>→</button>
          <button onClick={handleMoveUp}>↑</button>
          <button onClick={handleMoveDown}>↓</button>
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '10px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
        }}
      ></div>
    </div>
  );
};

export default LogoSection;
