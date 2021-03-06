import React from 'react';

import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 245.73 156" {...props}>
      <g fill="#4cba64">
        <path d="m167.87 0a23.32 23.32 0 0 0 0 33l44.89 44.9-45 45-22.89-22.9a23.34 23.34 0 0 0 -33 0l55.86 55.87 78-78z" />
        <circle cx="167.87" cy="78" r="16" />
        <path d="m77.87 156a23.34 23.34 0 0 0 0-33l-44.87-44.9 45-45 22.87 22.9a23.34 23.34 0 0 0 33 0l-55.87-55.87-78 78z" />
        <circle cx="77.87" cy="78" r="16" />
      </g>
    </Svg>
  );
};

export default Icon;
