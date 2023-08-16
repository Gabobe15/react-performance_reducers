import  {useReducer} from "react"

import {data} from '../../data'
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action"
import reducer from './reducer'

const defaultState = {
    people: data,
    isLoading: false
}



// use case  
// const reducer = (state, action) => {
//     switch (action) {
//       case CLEAR_LIST:
//         return { ...state, people: [] };
//       case RESET_LIST:
//         return { ...state, people: [] };
//       case CLEAR_LIST:
//         // const { id } = action.payload;
//         let newPeople = state.people.filter((person) => person.id !== id);
//         return { ...state, people: newPeople };
//       //  throw new Error(`no matching "${action.type}" -action type`)
//       default:
//         return state;
//     } 
//   }

   


function ReducerBasics() {
 const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload:{id}}) // we can pass id this way id parameter equal id that we are passing 
    // but it is good we use payload and pass id or name as object 
  }

  const clearList = () => {
    dispatch({type: CLEAR_LIST})
  }

  const resetList = () => {
    dispatch({type: RESET_LIST});
   }
//    using destructure code instead of writing long code  like state.people.length instead you can use people.length 

//    const {people} = state 
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button onClick={resetList}>Reset</button>
      ) : (
        <button onClick={clearList}>Clear</button>
      )}
    </div>
  );
}

export default ReducerBasics

// you pass in the action 
// it is going through the reducer 
// whatever we get from the reducer is going to be our new state 
