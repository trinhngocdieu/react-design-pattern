import { DogBreed } from "../../interfaces";

type BreedDogItemProps = {
  dogBreed: DogBreed;
  onClickDog: (dog: DogBreed) => void;
}

const BreedDogItem = ({ dogBreed, onClickDog }: BreedDogItemProps) => {
  return (
    <li
      key={dogBreed.breedName}
      onClick={() => onClickDog(dogBreed)}
    >
      {dogBreed.breedName}
    </li>
  );
}

 export default BreedDogItem;
