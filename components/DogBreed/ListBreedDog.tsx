import { useState } from 'react';
import { DogBreed } from "../../interfaces";
import useQueryDogBreeds from "../../queries/useQueryDogBreeds";
import ModalBreedInfo from "./ModalBreedInfo";
import BreedDogItem from "./BreedDogItem";

const ListBreedDog = () => {
  const {
    dogBreeds,
    isLoadingDogBreeds
  } = useQueryDogBreeds();

  const [
    selectedBreed,
    setSelectedBreed
  ] = useState<DogBreed>(null);

  const [
    showDogInfoModal,
    setShowDogInfoModal
  ] = useState<boolean>(false);

  const onClickDog = (dog: DogBreed): void => {
    setSelectedBreed(dog);
    setShowDogInfoModal(true);
  }

  return (
    <>
      {isLoadingDogBreeds ?
        <div>Loading...</div> :
        <ul>
          {dogBreeds.map((item: DogBreed) => (
            <BreedDogItem
              key={item.breedName}
              dogBreed={item}
              onClickDog={onClickDog}
            />
          ))}
        </ul>
      }
      {showDogInfoModal &&
        <ModalBreedInfo
          dogBreed={selectedBreed}
          setDogBreed={setSelectedBreed}
          showDogInfoModal={showDogInfoModal}
          setShowDogInfoModal={setShowDogInfoModal}
        />
      }
    </>
  );
}

export default ListBreedDog;
