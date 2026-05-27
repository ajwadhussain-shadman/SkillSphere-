import React from 'react';

const TipCard = ({tip}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={tip.image}
      alt={tip.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{tip.title}</h2>
    <p>{tip.description}</p>
  </div>
</div>
    );
};

export default TipCard;