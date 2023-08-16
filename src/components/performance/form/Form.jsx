import { useState } from "react";

  const Form = ({addPerson}) => {
    const [name, setName] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
          alert("Please Provide Name Value");
          return;
        }
        addPerson(name);
        setName("");
      };

  return (
     <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label className="form-label">Name</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
  )
}

export default Form