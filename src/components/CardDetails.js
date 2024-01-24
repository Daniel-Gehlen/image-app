// CardDetails.js
import React from 'react';
import { FaTachometerAlt, FaCalendarAlt } from 'react-icons/fa';

const CardDetails = ({ name, description, km, age, fipe, price, logoUrl }) => (
  <div style={{ width: '1080px', height: '960px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', zIndex: 1 }}>
<div style={{ id: 'name', height: '150px', width: '100%', backgroundColor: 'black', zIndex: -1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
  <div style={{ color: 'gold', textAlign: 'center', fontFamily: 'serif', fontWeight: 'bold', fontSize: '80px' }}>{name}</div>
</div>



    <div style={{ id: 'description', height: '250px', width: '100%', backgroundColor: 'black', zIndex: 2, textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
      <ul style={{ fontSize: '50px', margin: 0, padding: 0 }}>
        {description.map((item, index) => (
          <li key={index} style={{ color: 'white' }}>{item}</li>
        ))}
      </ul>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row', zIndex: 2, marginBottom: '1px' }}>
      <div style={{ id: 'km', display: 'flex', border: '6px solid #B8860B', backgroundColor: 'black', height: '60px', width: '280px', textAlign: 'center', overflow: 'hidden', lineHeight: '1.2', alignItems: 'center', justifyContent: 'center' }}>
        <FaTachometerAlt style={{ marginRight: '1px', fontSize: '75px', color: '#B8860B', marginBottom: '0', lineHeight: '1' }} />
        <div style={{ color: 'white', fontSize: '40px', fontWeight: 'bold', alignSelf: 'flex-end' }}>{km}</div>
      </div>
      <div style={{ id: 'age', display: 'flex', border: '6px solid #B8860B', backgroundColor: 'black', height: '60px', width: '280px', textAlign: 'center', overflow: 'hidden', lineHeight: '1.2', alignItems: 'center', justifyContent: 'center' }}>
        <FaCalendarAlt style={{ marginRight: '2px', fontSize: '70px', color: '#B8860B', alignSelf: 'flex-end' }} />
        <div style={{ color: 'white', fontSize: '40px', fontWeight: 'bold', alignSelf: 'flex-end' }}>{age}</div>
      </div>
    </div>

    <div style={{ id: 'fipe', display: 'flex', height: '60px', width: '570px', border: '6px solid #B8860B', backgroundColor: 'black', zIndex: 2, textAlign: 'center', whiteSpace: 'nowrap', marginBottom: '1px' }}>
      <div style={{ color: 'white', margin: 'auto', fontWeight: 'bold', fontSize: '50px' }}>{fipe}</div>
    </div>

    <div style={{ id: 'price', display: 'flex', height: '140px', width: '800px', border: '6px solid #B8860B', backgroundColor: 'black', zIndex: 2, textAlign: 'center', whiteSpace: 'nowrap', textOverflow: 'ellipsis', paddingBottom: '8px', marginBottom: '6px' }}>
      <div style={{ color: 'gold', margin: 'auto', fontSize: '120px', fontWeight: 'bold' }}>{price}</div>
    </div>

  </div>
);

export default CardDetails;
