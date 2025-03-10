import React from 'react';


interface Ex1Props {
  text: string; 
}

const Ex1: React.FC<Ex1Props> = ({ text }) => {
  return (
    <div>
      <img
        src="https://www.pngkey.com/png/detail/31-316202_premium-business-cards-calling-card-printing-png.png"
        alt="ex"
      />
      <p>{text}</p> 
    </div>
  );
};

export default Ex1;