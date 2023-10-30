import PostScreen from "./features/Posts/PostScreen";
import CounterScreen from "./features/counter/counterScreen";

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <CounterScreen />
      <PostScreen />
    </div>
  );
};

export default App;
