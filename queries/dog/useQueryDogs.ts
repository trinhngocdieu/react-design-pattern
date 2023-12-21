import { useQuery } from 'react-query';
import { Dog } from "interfaces";
import getRandomNumber from "utils/random";
import { LIST_BREED_API } from 'constant/api';

interface DogResponse {
  message: {
    [dogName: string]: string[];
  };
}

const MAX_RANDOM_NUMBER = 100;
const useQueryDogs = () => {
  const fetchDogs = async (): Promise<Dog[]> => {
    const response = await fetch(LIST_BREED_API);
    const data: DogResponse = await response.json();
    const dogNames = Object.keys(data.message);

    return dogNames.map((dogName) => {
      return {
        name: dogName,
        subDog: data.message[dogName],
        avgHeight: getRandomNumber(MAX_RANDOM_NUMBER),
        avgWeight: getRandomNumber(MAX_RANDOM_NUMBER),
      };
    });
  };

  const {
    data,
    isLoading
  } = useQuery<Dog[], Error>('dogs', fetchDogs);

  return {
    dogs: data,
    isLoadingDogs: isLoading
  };
};

export default useQueryDogs;
