import React from 'react';

import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 448 512" {...props}>
      <path
        d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM128 224C110.3 224 96 238.3 96 256V352C96 369.7 110.3 384 128 384C145.7 384 160 369.7 160 352V256C160 238.3 145.7 224 128 224zM192 352C192 369.7 206.3 384 224 384C241.7 384 256 369.7 256 352V160C256 142.3 241.7 128 224 128C206.3 128 192 142.3 192 160V352zM320 288C302.3 288 288 302.3 288 320V352C288 369.7 302.3 384 320 384C337.7 384 352 369.7 352 352V320C352 302.3 337.7 288 320 288z"
        fill="url(#squad_event_steps_bottom_wave)"
      />
      <defs>
        <linearGradient
          id="squad_event_steps_bottom_wave"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#818cf8" />
          <stop offset="1" stopColor="#3D2A54" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
