type ListSubDogProps = {
  items: string[],
}
const ListSubDog = ({ items }: ListSubDogProps) => {
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

export default ListSubDog;
