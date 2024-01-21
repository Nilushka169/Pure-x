import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Change_Text = () => {
  return (
    <div className='App'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal',color:'white' }}>
        Crafting{' '}
        <span style={{ color: 'blue', fontWeight: 'bold' }}>
          <Typewriter
            words={['innovative', 'responsive', 'scalable', 'intuitive']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>{' '}
        web applications
      </h1>
    </div>
  );
};

export default Change_Text;
