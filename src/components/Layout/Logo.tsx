import { Image } from '@chakra-ui/react';
import tw from 'tailwind-styled-components';

import { AppConfig } from '../../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  dark?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 64 : 52;
  const LogoWrapper = tw.div`
    font-semibold text-2xl flex items-center justify-center dark:text-white-100
  `;
  return (
    <LogoWrapper>
      <Image
        alt=""
        src="../logo.png"
        width={size}
        height={size}
        mr={size / 4}
      />
      {AppConfig.site_name}
    </LogoWrapper>
  );
};

export default Logo;
