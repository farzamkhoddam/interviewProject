import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components/macro";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  currency1Img: string;
  currency2Img: string;
  pairTitle: string;
  id: number;
  tradable: boolean;
}
const PairCard: React.FC<Props> = ({
  currency1Img,
  currency2Img,
  pairTitle,
  tradable,
  id,
}) => {
  return (
    <Container>
      <Wrapper>
        <CurrencyImgContainer>
          <Img2 src={currency2Img} loading="lazy" />
          <Img src={currency1Img} loading="lazy" />
        </CurrencyImgContainer>
        <PairTitle>{pairTitle}</PairTitle>
        {tradable ? <Check /> : <Cross />}
        <Tradable>Tradable</Tradable>
      </Wrapper>
    </Container>
  );
};

export default PairCard;

const Container = styled.div`
  margin-bottom: 3rem;
  width: 26%;
  height: 4rem;
  transition: all 0.5s ease;
  :hover {
    transform: translateY(-0.5rem);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  filter: drop-shadow(2px 4px 6px black);
  font-family: Open Sans;
  font-style: normal;
  border: 2px solid white;
  border-radius: 14px;
  padding: 0.5rem;
  background: var(--color-gray2);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
`;
const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: -1rem;
  right: 0;
`;
const Img2 = styled(Img)`
  z-index: 2;
  margin-right: 0.5rem;
  right: 3rem;
`;
const CurrencyImgContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PairTitle = styled.h4`
  font-family: Open Sans;
  font-style: normal;
  font-size: 22px;
  line-height: 16px;
  color: white;
  width: max-content;
  white-space: nowrap;
  margin-left: 2rem;
`;
const Check = styled(AiFillCheckCircle)`
  color: #48fb6f;
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
`;
const Cross = styled(AiFillCloseCircle)`
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
  color: #eb6464;
`;
const Tradable = styled.p`
  font-size: 10px;
  color: #7a7ab8a3;
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
`;
