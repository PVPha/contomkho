import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = "", style = {} }) => {
  return (
    <span 
      className={`material-symbols-outlined ${className}`} 
      style={{ fontSize: size, ...style }}
    >
      {name}
    </span>
  );
};

export default Icon;
