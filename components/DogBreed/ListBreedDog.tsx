import { useState } from 'react';
import ModalDogBreedInfo from "./ModalDogBreedInfo";
import BreedDogItem from "./BreedDogItem";
import { DogBreed } from "interfaces";
import useQueryDogBreeds from "queries/useQueryDogBreeds";

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
        <ModalDogBreedInfo
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
