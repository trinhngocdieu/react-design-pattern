type ListDogBreedProps = {
  items: string[],
}
const ListSubBreedDog = ({ items }: ListDogBreedProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListSubBreedDog;