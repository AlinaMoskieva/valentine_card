import ShowCounter from './ShowCounter';
import { useCountdown } from './hooks/useCountdown';

type CountdownProps = {
  targetDate: string;
};

const Countdown: React.FC<CountdownProps> = ({targetDate}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <>EXpired!</>
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds}/>
  }
  
};

export default Countdown;