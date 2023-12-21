import { useState, useMemo } from 'react';
import { Dog } from "interfaces";

const useDogPower = (dog : Dog) => {
  const [power, setPower] = useState(null);
  const { avgHeight, avgWeight } = dog;

  useMemo(() => {
    const calculatePower = () => {
      const calculatedPower = avgHeight + avgWeight * 9;
      setPower(calculatedPower);
    };

    calculatePower();
  }, [avgHeight, avgWeight]);

  return { power };
};

export default useDogPower;
