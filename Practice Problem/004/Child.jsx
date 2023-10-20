const Child = ({ childData }) => {
  //data pass to parent
  const data = "i am  Child Component data";
  childData(data);

  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};

export default Child;
