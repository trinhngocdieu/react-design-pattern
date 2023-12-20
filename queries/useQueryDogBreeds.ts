import { useQuery } from 'react-query';
import { DogBreed } from "interfaces";
import getRandomNumber from "utils/random";
import { LIST_BREED_API } from 'constant/api';

interface DogBreedResponse {
  message: {
    [breed: string]: string[];
  };
}

const MAX_RANDOM_NUMBER = 100;
const useQueryDogBreeds = () => {
  const fetchDogBreeds = async (): Promise<DogBreed[]> => {
    const response = await fetch(LIST_BREED_API);
    const data: DogBreedResponse = await response.json();
    const breedNames = Object.keys(data.message);

    return breedNames.map((breedName) => {
      return {
        breedName,
        subBreeds: data.message[breedName],
        avgHeight: getRandomNumber(MAX_RANDOM_NUMBER),
        avgWeight: getRandomNumber(MAX_RANDOM_NUMBER),
      };
    });
  };

  const {
    data,
    isLoading
  } = useQuery<DogBreed[], Error>('dogBreeds', fetchDogBreeds);

  return {
    dogBreeds: data,
    isLoadingDogBreeds: isLoading
  };
};

export default useQueryDogBreeds;
