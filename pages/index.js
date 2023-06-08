import styled from "styled-components";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/offer");
  const data = await res.json();

  return {
    props: { data: data },
  };
};

const StyledWrapper = styled.div`
  box-shadow: 3px 3px 9px rgba(79, 79, 79, 0.3);
  border-radius: 6px;
`;
const StyledHalo = styled.div`
  width: 384px;
  height: 199px;
  padding: 24px;
  background: ${({ backgroundimage }) => `url(${backgroundimage})`} no-repeat
    center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-radius: 6px;
  background-size: auto;
  color: #ffffff;
  font-size: 33px;
  font-weight: 600;
`;
const OffersList = styled.ul`
  list-style-type: none;
`;
const OfferListItem = styled.li`
  background: ${({ isEven }) => (isEven ? "#F3F4F6" : "#FFFFFF")};
`;

export default function Home({ data }) {
  // const { countryId, countryName, picUrl, offers } = data;
  return (
    <>
      <h1>kurde jak to się robi?!</h1>
      {data.map(({ countryId, countryName, picUrl, offers }) => {
        return (
          <StyledWrapper key={countryId}>
            <StyledHalo backgroundimage={picUrl}>{countryName}</StyledHalo>

            <OffersList>
              {offers.map(
                (
                  {
                    placeId,
                    placeName,
                    rating,
                    date,
                    oldPrice,
                    currentPrice,
                    currency,
                    isLastminute,
                    isAllinclusive,
                  },
                  index
                ) => {
                  return (
                    <OfferListItem key={placeId} isEven={(index + 1) % 2 === 0}>
                      <div>
                        <div>{placeName}</div>
                        <div>{rating}</div>
                      </div>

                      <span>{date}</span>

                      <div>
                        {isLastminute && <span>Last minute</span>}
                        {!isAllinclusive && <span>All inclusive</span>}
                      </div>
                      <div></div>
                    </OfferListItem>
                  );
                }
              )}
            </OffersList>
          </StyledWrapper>
        );
      })}
    </>
  );
}
