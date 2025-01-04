import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/todoList/TodoList";
import Footer  from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <h1>Redux Live Coding</h1>
      <Counter />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
