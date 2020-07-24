import React from "react";
import { GridLoader } from 'react-spinners';

function Loading() {
  return (
    <div className="loading">
      <GridLoader size="30px" color="#F15d51" />
      <h2>Cargando</h2>
    </div>

  );
};

export default Loading;