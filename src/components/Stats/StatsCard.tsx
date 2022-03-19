import { ReactNode } from 'react';

import tw from 'tailwind-styled-components';

type IStatsCardProps = {
  icon: ReactNode;
  text: string;
  children: ReactNode;
};

const StatCardWrapper = tw.div`
  stats-card flex items-center bg-white rounded-md p-4
`;
const IconWrapper = tw.div`
  w-16 h-16 flex items-center justify-center rounded-full flex-shrink-0
`;
const ContentWrapper = tw.div`
  ml-4
`;

const StatsCard = (props: IStatsCardProps) => (
  <StatCardWrapper>
    <IconWrapper>{props.icon}</IconWrapper>

    <ContentWrapper>
      <div className="text-xl font-bold">{props.children}</div>
      <div className="text-lg font-semibold">{props.text}</div>
    </ContentWrapper>

    <style jsx>
      {`
        .stats-card :global(svg) {
          @apply text-gray-100 stroke-current w-8 h-8 stroke-2;
        }
      `}
    </style>
  </StatCardWrapper>
);

export default StatsCard;
