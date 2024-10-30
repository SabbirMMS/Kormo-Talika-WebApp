/* eslint-disable react/prop-types */
export default function TaskActions({
  handleActionShowModal_NewTask,
  showDelete,
  onDeleteAllTasks,
}) {
  return (
    <>
      <div className="flex mt-2">
        <button
          className="w-fit inline-block px-5 py-2 bg-green-700 rounded-xl mx-1 text-gray-300 font-bold"
          onClick={handleActionShowModal_NewTask}
        >
          Add Task
        </button>
        {showDelete && (
          <button
            onClick={onDeleteAllTasks}
            className="w-fit inline-block px-5 py-2 bg-red-700 rounded-xl mx-1 text-gray-300 font-bold"
          >
            Delete All
          </button>
        )}
      </div>
    </>
  );
}
