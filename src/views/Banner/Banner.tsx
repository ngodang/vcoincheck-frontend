import tw from 'tailwind-styled-components';

const MainWrapper = tw.div`
  max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full
`;

const FlexContainner = tw.div`
  rounded-2xl flex flex-shrink shadow-md sm:flex-row flex-col
`;
const ImageContainer = tw.img`
  object-cover overflow-hidden rounded-tl-2xl rounded-bl-2xl
`;

const Banner = () => {
  return (
    <MainWrapper>
      <FlexContainner>
        <ImageContainer alt="" src="../assets/images/banner/main-banner.png" />
        <ImageContainer alt="" src="../assets/images/banner/slogan.png" />
      </FlexContainner>
    </MainWrapper>
  );
};
export default Banner;
