

const getRandomNumber = (n: number): number => {
  const max = Math.floor(n);

  if (max <= 0) {
    throw new Error("n must be a positive integer greater than 0");
  }

  return Math.floor(Math.random() * max) + 1;
}

export default getRandomNumber;
