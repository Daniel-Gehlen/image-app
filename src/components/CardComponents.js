import React, { useRef, useState } from 'react';
import CardImage from './CardImage';
import CardDetails from './CardDetails';
import LogoSection from './LogoSection';
import Imagem from '../assets/Amarok-Comfortline-2.0-Diesel-4x4.jpg';
import Logo from '../assets/LogoArnaldo.jpg';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

const CardComponents = ({ handleSelectElement }) => {
  const cardRef = useRef();
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  const handleDownloadClick = async () => {
    if (isSelected) {
      const cardNode = cardRef.current;

      // Temporariamente remova a borda antes de gerar a imagem
      const originalBorder = cardNode.style.border;
      cardNode.style.border = 'none';

      try {
        // Alterando para baixar em formato JPG
        const dataUrl = await htmlToImage.toJpeg(cardNode, { quality: 1.0, width: 1080, height: 1920 });

        // Restaurar a borda original
        cardNode.style.border = originalBorder;

        // Fazer o download da imagem
        saveAs(dataUrl, 'card.jpg');
        setIsSelected(false);
      } catch (error) {
        console.error('Erro ao gerar a imagem:', error);

        // Certifique-se de restaurar a borda original mesmo em caso de erro
        cardNode.style.border = originalBorder;
      }
    }
  };

  return (
    <div
      ref={cardRef}
      style={{
        width: '1080px',
        height: '1920px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: isSelected ? '2px solid blue' : 'none',
      }}
      onClick={handleCardClick}
    >
      {/* Seção de imagem */}
      <CardImage imageUrl={Imagem} />

      {/* Metade inferior do cartão com detalhes */}
      <CardDetails
        name="Amarok Comfort Line 2.0 Diesel 4x4"
        description={['Bancos em couro', 'Revisões na concessionária', 'Único dono', 'Primeira linha']}
        km="101,000km"
        age="2010"
        fipe="Fipe: R$146.501,00"
        price="R$146.501,00"
        logoUrl={Logo}
      />

      <LogoSection logoUrl={Logo} />

      {/* Botão para download */}
      {isSelected && <button style={{ height: '150px' }} onClick={handleDownloadClick}>Download</button>}
    </div>
  );
};

export default CardComponents;
