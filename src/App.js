import './App.css';
import CreateTodo from "./components/todo/createTodo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
          <div>My todo</div>
      </header>
        <CreateTodo/>
    </div>
  );
}

export default App;
