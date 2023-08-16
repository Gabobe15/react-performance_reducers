
const Person = ({ name, removeItem, id}) => {
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  );
};

export default Person