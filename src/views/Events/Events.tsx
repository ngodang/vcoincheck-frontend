import Page from '../Page';
import tw from 'tailwind-styled-components';
import { Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const TittleContainer = tw.div`
  text-4xl font-semibold text-gray-800 text-center w-full
`;
const ContentWrapper = tw.div`
  flex flex-auto p-16 grid grid-cols-3 gap-4
`;
const EventsContainer = tw.div`
  w-full relative box-content border-4 rounded rounded-lg bg-white-100
`;

const NewsContainer = tw.div`
  w-full bg-white-100 flex flex-row py-2 px-2
`;

const LeftContent = tw.div`
  basis-1/6 rounded-2xl flex flex-col h-12 rounded-2xl sm:flex-row
`;
const RightContent = tw.div`
  basis-5/6
`;

const ImageContainer = tw.img`
  object-cover overflow-hidden rounded-tl-l rounded-bl-l
`;

const LeftContentRanList = tw.div`
  basis-1/6 flex flex-col h-12 sm:flex-row px-1.5 py-1.5
`;
const RightContentRanList = tw.div`
  basis-1/6 w-full
`;
const MiddleContentRanList = tw.div`
  basis-4/7 w-full 
`;

const Textbold = tw.text`
  text-1xl font-black font-black w-full 
`;

const Textitalic = tw.text`
  italic w-full relative text-blue-500
`;

const Contentbutton = tw.div`
  w-full sm:flex-row text-white px-2
`;

const ListNews = [
  {
    src: "../assets/images/news/sora.png",
    content: "February 9th, 2022, Ecosystem Updates for SORA, Polkaswap, and Fearless Wallet...",
    href: 'https://medium.com/sora-xor/february-9th-2022-ecosystem-updates-for-sora-polkaswap-and-fearless-wallet-f09cca62599d',
  },
  {
    src: "../assets/images/news/Subquery_Icon.png",
    content: "SubQuery Data Powers Nova Wallet — a next-gen mobile wallet for the Polkadot & Kusama ecosystem...",
    href: 'https://subquery.medium.com/subquery-data-powers-nova-wallet-a-next-gen-mobile-wallet-for-the-polkadot-kusama-ecosystem-cfecd80a10e0',
  },
  {
    src: "../assets/images/news/Unique-02.png",
    content: "An NFT Workshop at ETH Denver by Unique Network CTO Greg Zaitsev...",
    href: 'https://medium.com/unique-network/an-nft-workshop-at-eth-denver-by-unique-network-cto-greg-zaitsev-5a7d65d1542e',
  },
];
const RanKinglist = [
  {
    proname: "Kulubu",
    shotname: "KLB",
    src: "../assets/images/news/sora.png",
    price: "$0.019",
    precent: "5,44%"
  },
  {
    proname: "Kulubu",
    shotname: "KLB",
    src: "../assets/images/news/sora.png",
    price: "$0.019",
    precent: "5,44%"
  },
  {
    proname: "Kulubu",
    shotname: "KLB",
    src: "../assets/images/news/sora.png",
    price: "$0.019",
    precent: "5,44%"
  },
  {
    proname: "Kulubu",
    shotname: "KLB",
    src: "../assets/images/news/sora.png",
    price: "$0.019",
    precent: "5,44%"
  },
  {
    proname: "Kulubu",
    shotname: "KLB",
    src: "../assets/images/news/sora.png",
    price: "$0.019",
    precent: "5,44%"
  },
];
const Events = () => (
  <Page>
    <>
      <ContentWrapper>
        <EventsContainer>
          <TittleContainer>News</TittleContainer>
          {ListNews.map((value, index) => (
            <Link href={value.href}>
              <NewsContainer>
                <LeftContent>
                  <ImageContainer alt="" src={value.src} />
                </LeftContent>
                <RightContent>
                  <Text>{value.content}</Text>
                </RightContent>
              </NewsContainer>
          </Link>
          ))}
        </EventsContainer>
        <EventsContainer>
              <TittleContainer>Top contributor</TittleContainer>
            <NewsContainer>
                Comming soon
            </NewsContainer>
          </EventsContainer>

        <EventsContainer>
            <TittleContainer>Ranking list</TittleContainer>
            <Contentbutton>
              <Button color = "white" className="py-1 px-2 bg-neutral-400 text-white text-sm font-semibold rounded-md hover:bg-blue-300 active:bg-blue-600 focus:outline-none focus:bg-blue-600">Gainer</Button>
              <Button color = "white" className="py-1 px-2 bg-neutral-400 text-white text-sm font-semibold rounded-md hover:bg-blue-300 active:bg-blue-600 focus:outline-none focus:bg-blue-600 left-2">Trending</Button>
            </Contentbutton>
            {RanKinglist.map((value,index)=>(
              <NewsContainer>
                <LeftContentRanList>
                    <ImageContainer alt="" src={value.src} />
                </LeftContentRanList>
                <MiddleContentRanList>
                  <Textbold>{value.proname}</Textbold>
                  <Text>{value.shotname}</Text>
                </MiddleContentRanList>
                <RightContentRanList>
                  <Textbold>{value.price}</Textbold>
                  <Textitalic><Text>{value.precent}</Text></Textitalic>
                </RightContentRanList>
              </NewsContainer>
            ))}
          </EventsContainer>
      </ContentWrapper>
        </>
  </Page>
);

export default Events;
