import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    count: 0,
  });
  const [submittedData, setSubmittedData] = useState(null);
  /*short way*/
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  // const handleIncrement = () => {
  //   setData({
  //     ...data,
  //     count: data.count + 1,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(data);
  };

  return (
    <>
      <div>
        <h1>count: {data.count}</h1>
        <button onClick={() => setData({ ...data, count: data.count + 1 })}>
          Increment
        </button>
        <button onClick={() => setData({ ...data, count: data.count - 1 })}>
          Decrement
        </button>
      </div>

      <div>
        <h1>Submit Form</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={data.name}
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={data.age}
              required
              onChange={(e) => setData({ ...data, age: e.target.value })}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={data.email}
              required
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div>
            <h2>Submitted Data:</h2>
            <p>Name: {submittedData.name}</p>
            <p>Age: {submittedData.age}</p>
            <p>Email: {submittedData.email}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
