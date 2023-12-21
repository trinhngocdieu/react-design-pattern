import { Dog } from "interfaces";

type DogItemProps = {
  dog: Dog;
  onClickDog: (dog: Dog) => void;
}

const DogItem = ({ dog, onClickDog }: DogItemProps) => {
  return (
    <li
      key={dog.name}
      onClick={() => onClickDog(dog)}
    >
      {dog.name}
    </li>
  );
}

 export default DogItem;
