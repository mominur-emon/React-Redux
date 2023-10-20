const Child = ({ msg, bio }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{msg}</p>
      <p>{bio.name}</p>
      <p>{bio.age}</p>
    </div>
  );
};

export default Child;
