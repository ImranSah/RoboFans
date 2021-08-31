import React from "react";

const CardList = ({ no, name }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${no}?200x200`} alt="Robofans" />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CardList;
