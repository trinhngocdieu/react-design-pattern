# Purpose
This project demo how we separate different layer in the React Project. 
Basically, we have 3 layers:

![diagram.png](statics%2Fdiagram.png)

- UI Layer: This layer is responsible for rendering the UI, and handle the user interaction
  - [ListDog](https://github.com/trinhngocdieu/react-design-pattern/blob/main/components/Dog/ListDog/ListDog.tsx): This component is responsible for rendering the list of dogs
    - [DogItem](https://github.com/trinhngocdieu/react-design-pattern/blob/main/components/Dog/ListDog/DogItem.tsx): This component is responsible for rendering the item of the dog
  - [ModalDog](https://github.com/trinhngocdieu/react-design-pattern/blob/main/components/Dog/ModalDog/ModalDog.tsx): This component is responsible for rendering the modal of the dog
    - [ListSubDog](https://github.com/trinhngocdieu/react-design-pattern/blob/main/components/Dog/ModalDog/ListSubDog.tsx): This component is responsible for rendering the sub dogs of a dog 
- Logic Layer (hooks): This layer is responsible for handling the business logic, and communicate with the API
  - [userDogPower](https://github.com/trinhngocdieu/react-design-pattern/blob/main/hooks/dog/useDogPower.ts#L3): This hook is responsible for calculating the power of the dog, based on the height and weight
- API Layer: This layer is responsible for communicating with the API, using React-Query
  - [userQueryDogs](https://github.com/trinhngocdieu/react-design-pattern/blob/main/queries/dog/useQueryDogs.ts): This hook is responsible for querying the dog breeds
  - [useQueryDogImage](https://github.com/trinhngocdieu/react-design-pattern/blob/main/queries/dog/useQueryDogImage.ts): This hook is responsible for querying the dog image

Whenever we need to use any state, data, logic, we just add the hook to the UI component, and it will handle the rest.
It will be similar to philosophy of React Hooks, we separate the logic into different layer, so it will be easier to maintain and test.

## Benefits

Design for the scalability, and easy to **Scale** the project in the future, here we look at the **Long Term** benefit, not just the short term benefit.
Put everything in one place is more suitable for a **Demo and Prototype project**, which we want to do it **Fast**, as it will be easy to get messy along the time, and when we need to separate the logic, it will be hard to do that.
As the person who writes the code, and the person who does refactor the code is different as well as the constraint between many parts in one component.
Organize the code unit in its layers from beginning, will make it easier to **Scale** the project in the future, as we can easily add more logic, more data, more UI, without affecting the other layers.

- **Reusability**: useDogPower, useQueryDogs, useQueryDogImage can be reused in many components with similar logic 
- **Testability**: The data fetching logic can be tested independently of the component, making unit testing more straightforward.
- **Readability**: The main component is focused on rendering and managing its own state, while the data fetching logic is encapsulated in a separate module, improving code readability.
- **Separation of Concerns**: Making your codebase more modular and easier to maintain, React UI component only cares about UI and User Interaction. 

Basically, this makes our code base more **Modular**, and **Maintainable**.
## Requirements

![img.png](statics%2Fimg.png)

- API: https://dog.ceo/dog-api/documentation/
- Use typescript
- Use react-query for querying data
- Use React Bootstrap https://react-bootstrap.netlify.app/
- Not using store
- Zero Style
- We add some random data for each Dog Breed (level 1), `avgHeight` and `avgWeight`after loading data.
  Based on avgHeight and avgWeight, we calculate the POWER index of that breed and show on modal?
 ```POWER = avgHeight + avgWeight * 9;```

## Run the project
- Install dependencies: `yarn`
- Run the project: `yarn dev`

