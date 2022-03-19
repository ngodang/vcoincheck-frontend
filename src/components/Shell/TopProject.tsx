import tw from 'tailwind-styled-components';

import { StatsCard } from '../Stats';
import { BinanceChainIcon, Coin98Icon, MathWalletIcon, OkexIcon } from '../Svg';

const binanceChain = <BinanceChainIcon width={40} height={40} />;
const coin98 = <Coin98Icon width={40} height={40} />;
const mathWallet = <MathWalletIcon width={40} height={40} />;
const okex = <OkexIcon width={40} height={40} />;

<style jsx>
  {`
    .stats-card :global(svg) {
      @apply text-gray-100 stroke-current w-8 h-8 stroke-2;
    }
  `}
</style>;

const TopProject = () => {
  const TopProjectWrapper = tw.div`
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6
  `;

  const ListTenProject = [
    {
      icon: binanceChain,
      name: 'BCS',
      price: '$18.31',
    },
    {
      icon: coin98,
      name: 'Coin98',
      price: '$1.25',
    },
    {
      icon: mathWallet,
      name: 'MATH',
      price: '$0.1361',
    },
    {
      icon: okex,
      name: 'OKEx',
      price: '$0.1361',
    },
  ];
  return (
    <TopProjectWrapper>
      {ListTenProject.map((value, index) => (
        <StatsCard key={index} icon={value.icon} text={value.price}>
          {value.name}
        </StatsCard>
      ))}
    </TopProjectWrapper>
  );
};

export { TopProject };
