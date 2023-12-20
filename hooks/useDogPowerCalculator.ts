import { useState, useMemo } from 'react';
import { DogBreed } from "../interfaces";

const useDogPowerCalculator = (dogBreed : DogBreed) => {
  const [power, setPower] = useState(null);
  const { avgHeight, avgWeight } = dogBreed;

  useMemo(() => {
    const calculatePower = () => {
      const calculatedPower = avgHeight + avgWeight * 9;
      setPower(calculatedPower);
    };

    calculatePower();
  }, [avgHeight, avgWeight]);

  return { power };
};

export default useDogPowerCalculator;
