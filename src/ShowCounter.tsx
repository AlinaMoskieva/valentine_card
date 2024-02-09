import React from "react";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";

const DateDisplayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 50vh;
  
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
`;

const Title = styled.h1`
  align-self: center;
  padding-top: 25vh;
  font-size: 2.5rem;
  color: #ff8fab;
`;

type ShowCounterProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ShowCounter: React.FC<ShowCounterProps> = ({days, hours, minutes, seconds}) => {
  return(
    <CounterWrapper>
      <Title>Your card will be available in</Title>
      <DateDisplayWrapper>
        <DateDisplay value={days} type="Days"/>
        <DateDisplay value={hours} type="Hours"/>
        <DateDisplay value={minutes} type="Minutes"/>
        <DateDisplay value={seconds} type="Seconds"/>
      </DateDisplayWrapper>
    </CounterWrapper>
  )
}

export default ShowCounter;