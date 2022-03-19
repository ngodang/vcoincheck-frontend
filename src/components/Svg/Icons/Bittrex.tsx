import React from 'react';

import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 245.73 156" {...props}>
      <path
        d="m49.67 0v40.89h23.92v-15.2h143.52v154.14h-143.52v-82.83h-23.92v108.52h191.33v-205.52zm-49.67 57.8v205.53h191.35v-42.55h-23.91v16.86h-143.53v-154.15h143.53v81.18h23.91v-106.87z"
        fill="#0082d7"
      />
    </Svg>
  );
};

export default Icon;
