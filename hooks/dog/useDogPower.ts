import { useState, useMemo } from 'react';
import { Dog } from "interfaces";

const MAGIC_NUMBER = 9;
const useDogPower = (dog : Dog) => {
  const [power, setPower] = useState(null);
  const { avgHeight, avgWeight } = dog;

  useMemo(() => {
    const calculatePower = () => {
      const calculatedPower = avgHeight + avgWeight * MAGIC_NUMBER;
      setPower(calculatedPower);
    };

    calculatePower();
  }, [avgHeight, avgWeight]);

  return { power };
};

export default useDogPower;
