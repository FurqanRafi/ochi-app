// components/AnimatedButton.js
import React from 'react';


const Button = ({ text, className = '', icon = null }) => {
  return (
    <button className={`group flex items-center gap-0.3 overflow-hidden ${className}`}>
      {text.split('').map((letter, i) => (
        <span
          key={i}
          className="inline-block animation-letter"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
      {icon}
    </button>
  );
};

export default Button;
