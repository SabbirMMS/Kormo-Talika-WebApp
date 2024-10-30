/* eslint-disable react/prop-types */
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

function TaskList({ tasks, onEditClick, onFavClick, onDeleteTask }) {
  const headers = [
    "🔢",
    "♥",
    "Title",
    "Description",
    "Tags",
    "Priority",
    "Options",
  ];

  return (
    <div className="h-[350px] overflow-auto">
      {tasks.length < 1 ? (
        <p className="text-center text-primary p-10 text-lg dark:text-gray-300 font-bold">
          No task found
        </p>
      ) : (
        <table className="w-full">
          <thead className="bg-green-800 dark:bg-slate-800 sticky top-0">
            <tr>
              {headers.map((head, index) => (
                <th
                  key={index}
                  className={`p-3 text-sm  text-center font-semibold capitalize hover:bg-slate-600
                  ${
                    index === 0 || index === 1
                      ? "w-12"
                      : index === 2
                      ? "w-[300px]"
                      : index === 3 || index === 4
                      ? "w-[350px]"
                      : index === 5
                      ? "w-[100px]"
                      : "w-[170px]"
                  }
                  `}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-white [&>*:nth-child(even)]:bg-[#121d36]">
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="p-3 text-sm text-center">{index + 1}</td>
                <td
                  className="p-3 text-sm text-center hover:scale-125 transition-all duration-300"
                  onClick={() => onFavClick(task.id)}
                >
                  {task.isFavorite ? <FaBookmark /> : <CiBookmark />}
                </td>
                <td className="p-3 text-sm text-left">{task.title}</td>
                <td className="p-3 text-sm text-left ">{task.description}</td>
                <td className="p-3 text-sm text-left m-auto">
                  {task.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="badge bg-green-800 self-center text-inherit p-3 m-2 font-thin"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </td>
                <td
                  className={`p-3 text-sm text-center ${
                    task.priority === "High"
                      ? "text-red-700"
                      : task.priority === "Medium"
                      ? "text-yellow-600"
                      : task.priority === "Low"
                      ? "text-green-700"
                      : "text-white"
                  }`}
                >
                  {task.priority}
                </td>
                <td className="p-3 text-sm text-center">
                  <button
                    className="bg-green-500 hover:bg-green-700 min-w-fit w-1/2 p-1 m-1 rounded"
                    onClick={() => {
                      onEditClick(task);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 min-w-fit  w-1/2 p-1 m-1 rounded"
                    onClick={() => {
                      onDeleteTask(task.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskList;
