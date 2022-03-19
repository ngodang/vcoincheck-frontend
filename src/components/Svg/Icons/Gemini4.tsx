import React from 'react';

import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 324 324" {...props}>
      <path
        d="m211.74 0c-57 0-105.39 43.84-111.49 100.25-56.41 6.1-100.25 54.51-100.25 111.49a112.34 112.34 0 0 0 112.26 112.26c57 0 105.58-43.84 111.49-100.25 56.41-6.1 100.25-54.51 100.25-111.49a112.34 112.34 0 0 0 -112.26-112.26zm86 124.84a87.35 87.35 0 0 1 -73.23 73.16v-73.16zm-271.44 74.32a87.35 87.35 0 0 1 73.19-73.37v73.21h-73.19zm171.91 25.35a86.9 86.9 0 0 1 -171.91 0zm.95-99.67v74.16h-74.32v-74.16zm98.54-25.35h-171.91a86.9 86.9 0 0 1 171.91 0z"
        fill="#00dcfa"
      />
    </Svg>
  );
};

export default Icon;
