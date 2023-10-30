import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "./postSlice";

const PostScreen = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchposts());
  }, []);

  return (
    <div>
      <h1>Post details</h1>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            const { title, body, id } = post;
            return (
              <article key={id}>
                <h1>post id : {id}</h1>
                <h3>post Title: {title}</h3>
                <p>Description: {body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostScreen;
