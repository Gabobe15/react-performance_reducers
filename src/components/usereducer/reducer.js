import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import { data } from "../../data";



const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    const { id } = action.payload;
    let newPeople = state.people.filter((person) => person.id !== id);
    return { ...state, people: newPeople };
  }
  throw new Error(`no matching "${action.type}" -action type`);
};

export default reducer