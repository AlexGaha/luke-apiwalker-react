import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("people");
  const [id, setId] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    navigate(`/${category}/${id}`)
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form1 search mb-2">
          <label className="form-label" for="search">
            Search For:
          </label>
          <select
            className="form-select"
            name="search"
            id="search"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div className="form2  mb-2">
          <label className="form-label" for="inputId">
            ID
          </label>
          <input
            type="id"
            className="form2 form-control"
            id="inputId"
            placeholder="ID"
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
          ></input>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
