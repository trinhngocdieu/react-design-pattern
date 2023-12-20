import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DogBreed } from "../../interfaces";
import useQueryDogImage from "../../queries/useQueryDogImage";
import Image from 'react-bootstrap/Image';
import { ListSubBreedDog } from "./ListSubBreedDog";
import useDogPowerCalculator from "../../hooks/useDogPowerCalculator";

type DogBreedDetailModalProps = {
  dogBreed: DogBreed;
  setDogBreed: (dog: DogBreed) => void;
  showDogInfoModal: boolean;
  setShowDogInfoModal: (show: boolean) => void;
}

const ModalDogBreedInfo = ({
  dogBreed,
  setDogBreed,
  showDogInfoModal,
  setShowDogInfoModal
}: DogBreedDetailModalProps) => {
  const { dogImage } = useQueryDogImage(dogBreed.breedName);
  const { power } = useDogPowerCalculator(dogBreed);

  const onCloseModal = () => {
    setShowDogInfoModal(false);
    setDogBreed(null);
  }

  return (
    <Modal
      show={showDogInfoModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Info</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h3>{dogBreed.breedName}</h3>
        <p>Power: {power}</p>
        {dogImage &&
          <Image
              src={dogImage}
              thumbnail
              loading={"eager"}
              width={300}
              height={300}
          />
        }
        {dogBreed.subBreeds.length > 0 &&
          <ListSubBreedDog
              items={dogBreed.subBreeds}
          />
        }
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onCloseModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDogBreedInfo;
