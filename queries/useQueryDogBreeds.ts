import { useQuery, UseQueryResult } from 'react-query';
import { DogBreed } from "../interfaces";
import getRandomNumber from "../utils/random";
import { LIST_BREED_API } from "./apiList";

interface DogBreedResponse {
  message: {
    [breed: string]: string[];
  };
}

const useQueryDogBreeds = (): UseQueryResult<DogBreed[], Error> => {
  const fetchDogBreeds = async (): Promise<DogBreed[]> => {
    const response = await fetch(LIST_BREED_API);
    const data: DogBreedResponse = await response.json();
    const breedNames = Object.keys(data.message);

    return breedNames.map((breedName) => {
      const subBreeds = data.message[breedName];
      return {
        breedName,
        subBreeds,
        avgHeight: getRandomNumber(100),
        avgWeight: getRandomNumber(100),
      };
    });
  };

  return useQuery<DogBreed[], Error>('dogBreeds', fetchDogBreeds);
};

export default useQueryDogBreeds;
