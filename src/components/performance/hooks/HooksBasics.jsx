import  { useCallback, useMemo, useState } from 'react'
import {data} from '../../../data'
import List from '../hooks/List'
import SlowFunction from './SlowFunction'

const HooksBasics = () => {
    const [count, setCount] = useState(0)
    const [people, setPeople] = useState(data)

    const value = useMemo(() => SlowFunction(), []);
    console.log(value); 
   

    const removeItem = useCallback(
      (id) => {
        const newPerson = people.filter((person) => person.id !== id);
        setPeople(newPerson);
      },
      [people]
    );
    
   
    
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <List people={people} removeItem={removeItem} />
    </div>
  );
}

export default HooksBasics