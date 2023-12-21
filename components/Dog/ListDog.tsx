import { useState } from 'react';
import ModalDogInfo from "./ModalDogInfo";
import DogItem from "./DogItem";
import { Dog } from "interfaces";
import useQueryDogs from "queries/useQueryDogs";

const ListDog = () => {
  const {
    dogs,
    isLoadingDogs
  } = useQueryDogs();

  const [
    selectedDog,
    setSelectedDog
  ] = useState<Dog>(null);

  const [
    showDogModal,
    setShowDogModal
  ] = useState<boolean>(false);

  const onClickDog = (dog: Dog): void => {
    setSelectedDog(dog);
    setShowDogModal(true);
  }

  return (
    <>
      {isLoadingDogs ?
        <div>Loading...</div> :
        <ul>
          {dogs.map((item: Dog) => (
            <DogItem
              key={item.name}
              dog={item}
              onClickDog={onClickDog}
            />
          ))}
        </ul>
      }
      {showDogModal &&
        <ModalDogInfo
          dog={selectedDog}
          setDog={setSelectedDog}
          showDogModal={showDogModal}
          setShowDogModal={setShowDogModal}
        />
      }
    </>
  );
}

export default ListDog;
