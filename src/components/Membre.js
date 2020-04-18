import React, { Fragment } from "react";
const Membre = ({ nom, children, age }) => {
  return (
    <Fragment>
      <h2 style={{ backgroundColor: age <= 22 ? 'yellow':'purple', 
      color : age <= 22 ? 'black': 'white' }}>
        Membre de la famille : {nom.toUpperCase()} : {age}
      </h2>
      {children ? <p> {children}</p> : <Fragment />}
    </Fragment>
  );
};

export default Membre;
