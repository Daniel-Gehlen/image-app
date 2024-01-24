import React, { useState } from 'react';

const CardImage = ({ imageUrl }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [contentSize, setContentSize] = useState(100);
  const [positionX, setPositionX] = useState(0);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleIncreaseSize = () => {
    setContentSize((prevSize) => Math.min(prevSize + 10, 200)); // Limitando o aumento a 200%
  };

  const handleDecreaseSize = () => {
    setContentSize((prevSize) => Math.max(prevSize - 10, 10)); // Limitando a redução a 10%
  };

  const handleMoveRight = () => {
    setPositionX((prevPosition) => prevPosition + 10);
  };

  const handleMoveLeft = () => {
    setPositionX((prevPosition) => prevPosition - 10);
  };

  const selectedStyle = {
    border: isSelected ? '2px solid blue' : 'none',
    width: '1080px',
    height: '960px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    zIndex: 1,
    position: 'relative',
  };

  const contentContainerStyle = {
    overflow: 'hidden',
    height: '100%', // Garante que a div de conteúdo ocupe toda a altura

  };

  const contentStyle = {
    width: '100%', // Largura original do conteúdo
    height: '100%', // Altura original do conteúdo
    objectFit: 'cover',
    transform: `scale(${contentSize / 100})translateX(${positionX}px)`,
  };


  return (
    <div
      className={`image ${isSelected ? 'selected' : ''}`}
      style={selectedStyle}
      onClick={handleClick}
    >
      <div style={contentContainerStyle}>
        <img
          src={imageUrl}
          style={contentStyle}

        />
      </div>
      {isSelected && (
        <div
          style={{
            position: 'absolute',
            bottom: '150px',
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
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          bottom: -4,
          left: 0,
          width: '100%',
          height: '100px',
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
        }}
      ></div>
    </div>
  );
};

export default CardImage;
