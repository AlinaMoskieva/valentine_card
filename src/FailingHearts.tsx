import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-100vh);
    opacity: 0;
  }
  to {
    transform: translateY(100vh);
    opacity: 1;
  }
`;

const Heart = styled.div`
  position: absolute;
  color: #ff006e;
  animation: ${fadeIn} linear infinite;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;

  &:before {
    content: '♥';
    font-size: 25px;
  }
`;

const FallingHearts = () => {
  const heartsCount = 100;
  const delays = Array.from({ length: heartsCount }, (_, i) => `${(i * -0.1).toFixed(1.5)}s`);
  const hearts = [];

  for (let i = 0; i < heartsCount; i++) {
    hearts.push(
      <Heart
        key={i}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: delays[i % delays.length],
        }}
      />
    );
  }

  return <>{hearts}</>;
};

export default FallingHearts;
