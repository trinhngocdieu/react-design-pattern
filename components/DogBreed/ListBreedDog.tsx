import { useState } from 'react';
import { DogBreed } from "../../interfaces";
import useQueryDogBreeds from "../../queries/useQueryDogBreeds";
import ModalBreedInfo from "./ModalBreedInfo";
import BreedDogItem from "./BreedDogItem";

const ListBreedDog = () => {
  const {
    data,
    status
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
      {status === 'loading' ?
        <div>Loading...</div> :
        <ul>
          {data.map((item: DogBreed) => (
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
