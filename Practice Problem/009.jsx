import { useEffect, useState } from "react";

const Component1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((user, id) => (
        <div key={id}>
          <h1>Title: {user.title}</h1>
          <p>body: {user.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Component1;
