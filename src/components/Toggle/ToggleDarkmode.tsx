import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';
import tw from 'tailwind-styled-components';

import { MoonIcon, SunIcon } from '../Svg';

const ToggleDarkmode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return (
        <SunIcon
          color="white"
          width="36px"
          onClick={() => setTheme('light')}
        ></SunIcon>
      );
    }
    document.documentElement.classList.remove('dark');
    return <MoonIcon width="36px" onClick={() => setTheme('dark')}></MoonIcon>;
  };

  const ToogleDarkmodeWrapper = tw.div`
    container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center
  `;

  return <ToogleDarkmodeWrapper>{renderThemeChanger()}</ToogleDarkmodeWrapper>;
};
export default ToggleDarkmode;
