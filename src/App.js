import "./App.css";
import FooterTodo from "./components/FooterTodo";
import Header from "./components/Header";

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <TodoHeader />
          <hr className="mt-4" />
          <TodoList />
          <hr className="mt-4" />
          <FooterTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
