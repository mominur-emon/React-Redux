import Child from "./Child";
const App = () => {
  const msg = "Hello i am from parent message";
  const bio = {
    name: "emon",
    age: "24",
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <Child msg={msg} bio={bio} />
    </div>
  );
};

export default App;
