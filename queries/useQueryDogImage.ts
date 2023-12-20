import { useQuery, UseQueryResult } from 'react-query';
import { RANDOM_IMAGE_API } from "./apiList";

interface DogImageResponse {
  message: string;
}

const useQueryDogImage = (breedName: string): UseQueryResult<string, Error> => {
  const fetchDogImage = async (): Promise<string> => {
    const response = await fetch(`${RANDOM_IMAGE_API}/${breedName}/images/random`);
    const data: DogImageResponse = await response.json();
    return data.message;
  };

  return useQuery<string, Error>('dogImage', fetchDogImage);
}

export default useQueryDogImage;
