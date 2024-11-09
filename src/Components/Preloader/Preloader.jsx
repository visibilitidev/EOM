// Preloader.js
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Preloader = () => (
  <div style={styles.loaderContainer}>
    <ClipLoader color="#000000" size={50} />
  </div>
);

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6',
  },
};

export default Preloader;
