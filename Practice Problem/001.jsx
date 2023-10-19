import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <br />
        <h1>show below table title</h1>

        {data.map((user, id) => (
          <p key={id}>
            <h3> user Id :{user.userId}</h3>
            <h5> Title: {user.title}</h5>
            <p>{user.body}</p>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;

/* api summary
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
.................
  }
]*/
