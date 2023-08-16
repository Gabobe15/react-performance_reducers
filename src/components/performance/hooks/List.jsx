import { memo } from 'react';
import Person from './Person'

const List = ({ people, removeItem }) => {
  console.log(people);
  return (
    <div>
      {people.map((person) => (
        <Person key={person.id} {...person} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default memo(List)