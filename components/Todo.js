import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  // Todo Adding Function
  const addTodo = () => {
    if (!input) {
    } else {
      setTodo([input, ...todo]);
      setInput("");
    }
  };

  // Todo Removing Function
  const removeTodo = (id) => {
    const updatedTodo = todo.filter((elem, ind) => {
      return ind != id;
    });
    setTodo(updatedTodo);
  };

  // Todo RemoveAll Function
  const removeAll = () => {
    setTodo([]);
  };

  return (
    <>
      <div className="main-body">
        {/* Input and Add section */}
        <div className="flex">
          <input
            placeholder="Enter your todo"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-gray-200 rounded-xl pl-4 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
          />
          <PlusCircleIcon
            className="h-10 w-10 text-gray-700"
            onClick={addTodo}
          />
        </div>

        {/* Displaying Todos */}
        {todo.map((elem, indx) => {
          return (
            <div className="flex justify-between bg-gray-200 rounded-3xl mt-5 mr-5 w-full">
              <h1 className="pl-10 pt-2 pb-3">{elem}</h1>
              <MinusCircleIcon
                className="h-10 w-10 text-gray-700"
                onClick={() => removeTodo(indx)}
              />
            </div>
          );
        })}
      </div>

      {/* Remove All items */}
      <div className="flex bg-gray-100 rounded-3xl mt-5 ml-20">
        <h2 className="pl-10 pt-2 pb-3">Remove All</h2>
        <TrashIcon className="h-10 w-10 text-gray-700" onClick={removeAll} />
      </div>
    </>
  );
};

export default Todo;
