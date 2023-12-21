import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import ListSubDog from "./ListSubDog";
import { Dog } from "interfaces";
import useQueryDogImage from "queries/dog/useQueryDogImage";
import useDogPower from "hooks/dog/useDogPower";

type ModalDogProps = {
  dog: Dog;
  setDog: (dog: Dog) => void;
  showDogModal: boolean;
  setShowDogModal: (show: boolean) => void;
}

const ModalDog = ({
  dog,
  setDog,
  showDogModal,
  setShowDogModal
}: ModalDogProps) => {
  const { dogImage } = useQueryDogImage(dog.name);
  const { power } = useDogPower(dog);

  const onCloseModal = () => {
    setShowDogModal(false);
    setDog(null);
  }

  return (
    <Modal
      show={showDogModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Info</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h3>{dog.name}</h3>
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
        {dog.subDog.length > 0 &&
          <ListSubDog
              items={dog.subDog}
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

export default ModalDog;
