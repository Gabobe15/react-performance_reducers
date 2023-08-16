import { useState } from "react";
import { data } from "../../../data";
import List from '../form/List'

import { v4 as uuidv4 } from "uuid";
import Form from "./Form";

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const Id = uuidv4();
    const newPerson = { id: Id, name };
    setPeople([...people, newPerson]);
  };

  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};

export default LowerStateChallenge;
