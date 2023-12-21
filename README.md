# Purpose
This project demo how we separate different layer in the React Project. 
Basically, we have 3 layers:
- 
- UI Layer: This layer is responsible for rendering the UI, and handle the user interaction
  - ListDog: This component is responsible for rendering the list of dogs
  - DogModal: This component is responsible for rendering the modal of the dog
- Logic Layer (hooks): This layer is responsible for handling the business logic, and communicate with the API
  - [userDogPowerCalculator](https://github.com/trinhngocdieu/react-design-pattern/blob/main/hooks/dog/useDogPower.ts#L3): This hook is responsible for calculating the power of the dog, based on the height and weight
- API Layer: This layer is responsible for communicating with the API, using React-Query
  - [userQueryDogs](https://github.com/trinhngocdieu/react-design-pattern/blob/main/queries/dog/useQueryDogs.ts): This hook is responsible for querying the dog breeds
  - [useQueryDogImage](https://github.com/trinhngocdieu/react-design-pattern/blob/main/queries/dog/useQueryDogImage.ts): This hook is responsible for querying the dog image

Whenever we need to use any state, data, logic, we just add the hook to the UI component, and it will handle the rest.
It will be similar to philosophy of React Hooks, we separate the logic into different layer, so it will be easier to maintain and test.

## Benefits
- Apply the philosophy of the hooks, which React already provides us some hooks like useState, useEffect, useMemo.
- Decoupling between data layer and view layer
- Module and easy to maintain/test
- Component only care about the data and how we render the data, don't care about how/where data comes from.

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

