import React from 'react';
import DogConsumer from './components/DogConsumer';
import DogContext from './components/DogContext';

function App() {
  const [dog, setDog] = React.useState('German Sheppard');
  return (
    <DogContext.Provider value={{ dog, setDog }}>
      <DogConsumer />
    </DogContext.Provider>
  );
}

export default App;
