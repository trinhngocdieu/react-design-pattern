import { useQuery } from 'react-query';
import { RANDOM_IMAGE_API } from 'constant/api';

interface DogImageResponse {
  message: string;
}

const useQueryDogImage = (breedName: string) => {
  
  const fetchDogImage = async (): Promise<string> => {
    const response = await fetch(`${RANDOM_IMAGE_API}/${breedName}/images/random`);
    const data: DogImageResponse = await response.json();
    return data.message;
  };

  const {
    data,
    isLoading
  } = useQuery<string, Error>('dogImage', fetchDogImage);

  return {
    dogImage: data ,
    isLoadingDogImage: isLoading
  };
}

export default useQueryDogImage;
