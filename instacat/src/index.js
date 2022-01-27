import React from 'react';

import Logo from './components/Logo';
import Photo from './components/Photo';

const Main = () => {
  return (
    <>
      <Logo />
      <Photo count={10} file={require('./assets/images/cat0.jpg')} />
      <Photo count={24} file={require('./assets/images/cat3.jpg')} />
    </>
  );
};

export default Main;
