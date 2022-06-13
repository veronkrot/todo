import './App.css';
import TodoComponent from "./components/todo/todoComponent";
import CreateTodoBtn from "./components/todo/createTodoBtn";

function App() {
  return (
    <div className="App">
      <TodoComponent/>
       <CreateTodoBtn/>
    </div>
  );
}

export default App;
