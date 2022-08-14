import React from 'react';

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { name, age, id, image } = person;
        return (
          <div key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
