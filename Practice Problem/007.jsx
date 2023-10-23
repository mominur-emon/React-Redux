import { useEffect } from "react";
import { useState } from "react";

const Component1 = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("404 Data not  found !");
      });
  });
  return (
    <div>
      {loading ? "Loading...." : post.title}
      {error ? error : null}
    </div>
  );
};

export default Component1;
