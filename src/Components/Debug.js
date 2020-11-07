import React, { memo, useState } from 'react'
import { getCurrentTime } from '../utils/timer';

export const Debug = memo(() => {
  const [state, setState] = useState(null);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(getCurrentTime("04:12"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <center>{state}</center>;
});