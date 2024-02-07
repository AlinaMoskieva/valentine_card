import React from "react";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 100vh;
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
      <DateDisplay value={days} type="Days"/>
      <DateDisplay value={hours} type="Hours"/>
      <DateDisplay value={minutes} type="Minutes"/>
      <DateDisplay value={seconds} type="Seconds"/>
    </CounterWrapper>
  )
}

export default ShowCounter;