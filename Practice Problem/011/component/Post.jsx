import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../services/action/postAction";

const Post = () => {
  const { isLoading, post, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  return (
    <div>
      <h3>Post Details</h3>
      {isLoading && <h5>Loading....</h5>}
      {error && <h5>{error.message}</h5>}

      <section>
        {post &&
          post.map((dt) => {
            const { id, title, body } = dt;
            return (
              <article key={id}>
                <h1>Post Id: {id}</h1>
                <h3> Post Title: {title}</h3>
                <p>Description: {body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Post;
