import * as React from 'react';
import { DogBreed } from "../../interfaces";

type ListDogBreedProps = {
  items: string[],
}

export const ListSubBreedDog = ({ items }: ListDogBreedProps) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
