import React from "react";
/* props:variable qu'on passe à un composant */
const Membre = ({nom}) => {
 
  return <h2> Membre de la famille :{nom.toUpperCase()} </h2>;
};

export default Membre;
