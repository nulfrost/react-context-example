import React from 'react';
import DogContext from './DogContext';

function DogConsumer() {
  const { dog, setDog } = React.useContext(DogContext);
  const inputVal = React.useRef();
  console.log(dog);
  return (
    <>
      <input type='text' ref={inputVal} placeholder='Set a new dog breed. ' />
      <button onClick={() => setDog(inputVal.current.value)}>Go</button>
      <h1>{dog}</h1>
    </>
  );
}

export default DogConsumer;
