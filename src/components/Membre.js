import React, { Fragment } from "react";
const Membre = ({ nom, children, age,cacherNom }) => {
  return (
    <Fragment>
      <h2 style={{
         backgroundColor: age <= 22 ? 'yellow':'purple', 
         color : age <= 22 ? 'black': 'white' }}>
         {nom.toUpperCase()} : {age}
      </h2>
      <button onClick={cacherNom}> X </button>
      {children ? <p> {children}</p> : <Fragment />}
    </Fragment>
  );
};

export default Membre;
