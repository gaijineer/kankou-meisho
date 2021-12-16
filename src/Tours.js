import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>ツアーご紹介</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((element) => {
          return <Tour key={element.id} {...element} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
