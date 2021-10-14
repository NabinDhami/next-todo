import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";

const Todo = () => {
  return (
    <>
      <div className="main-body">
        <div className="flex">
          <input
            placeholder="Enter your todo"
            type="text"
            className="border-gray-200 rounded-xl pl-4 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
          />
          <PlusCircleIcon className="h-10 w-10 text-gray-700" />
        </div>

        <div className="flex justify-between bg-gray-200 rounded-3xl mt-5 mr-5 w-full">
          <h1 className="pl-10 pt-2 pb-3">Apple</h1>
          <MinusCircleIcon className="h-10 w-10 text-gray-700" />
        </div>
      </div>
      <div className="flex bg-gray-100 rounded-3xl mt-5 ml-20">
        <h2 className="pl-10 pt-2 pb-3">Remove All</h2>
        <TrashIcon className="h-10 w-10 text-gray-700" />
      </div>
    </>
  );
};

export default Todo;
