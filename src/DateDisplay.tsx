import React from "react";
import styled from "styled-components";

const DateDisplayWrapper = styled.div`
  line-height: 10rem;
  padding: 0 2rem;
  align-items: center;
  display: flex;
  flex-direction: column;

  color: #ff006e;
`;

const DateValue = styled.p`
  margin: 0;
  font-size: 10rem;
`;

const DateType = styled.span`
  color: #ff8fab;
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-top: 10px;
`;

type DateDisplayProps = {
  value: number;
  type: string;
};

const DateDisplay: React.FC<DateDisplayProps> = ({value, type}) => {
  return (
  <DateDisplayWrapper>
    <DateValue>{value}</DateValue>
    <DateType>{type}</DateType>
  </DateDisplayWrapper>);
}

export default DateDisplay;