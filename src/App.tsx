import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { CoinPair, PaginatePairData } from "./interfaces";
import PairCard from "./PairCard";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [pairs, setPairs] = useState<CoinPair[]>([]);
  const [link, setLink] = useState("https://api.bitpin.ir/v1/mkt/markets/");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get<PaginatePairData>(link);

        setPairs([...pairs, ...response.results]);
        if (response.next && !response.previous) {
          setLink(response.next);
        }
      } catch (error: any) {
        console.error(error?.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [link]);
  if (loading) return <h1>Loading...</h1>;

  return (
    <Container>
      <Title>جفت ارزها</Title>
      <Wrapper>
        <CardContainer>
          <PairCardContainer>
            {pairs.map((pairCardData, i) => {
              console.log("farzam i ===", i);
              return (
                <PairCard
                  key={i}
                  id={pairCardData.id}
                  tradable={pairCardData.tradable}
                  currency1Img={pairCardData?.currency1?.image || ""}
                  currency2Img={pairCardData?.currency2?.image || ""}
                  pairTitle={pairCardData?.title_fa || ""}
                />
              );
            })}
          </PairCardContainer>
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default App;
const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  color: var(--color-gray1);
  padding: 1.5rem 0;
`;
const Wrapper = styled.section`
  position: relative;
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const PairCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
