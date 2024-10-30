/* eslint-disable react/prop-types */
import { useState } from "react";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

function TaskBoard({ tasks, setTasks, filteredTasks }) {
  const [showModal, setShowModal] = useState(false);
  const [isUpdateTask, setIsUpadteTask] = useState(false);
  const [task, setTask] = useState({});

  const handleActionShowModal_NewTask = () => {
    setShowModal(true);
    setIsUpadteTask(false);
    setTask({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    });
  };

  // For modal / dialog
  const handleSubmitTask = (newTask) => {
    if (isUpdateTask) {
      // Task updating
      setTasks(tasks.map((t) => (t.id === newTask.id ? newTask : t)));
      setShowModal(false);
    } else {
      // New task adding
      setTasks([...tasks, newTask]);
      setShowModal(false);
    }
  };

  const onEditClick = (task) => {
    setShowModal(true);
    setTask(task);
    setIsUpadteTask(true);
  };

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onDeleteAllTasks = () => {
    setTasks([]);
  };

  const onFavClick = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, isFavorite: !t.isFavorite } : t))
    );
  };

  return (
    <>
      <section>
        <div className="container text-center px-5 py-2 ">
          {/* <h1 className="text-2xl text-green-700 font-bold m-2">
            আপনার কর্ম তালিকা তৈরি করুন।
          </h1> */}

          <TaskList
            tasks={filteredTasks}
            onEditClick={onEditClick}
            onFavClick={onFavClick}
            onDeleteTask={onDeleteTask}
          />

          <TaskActions
            handleActionShowModal_NewTask={handleActionShowModal_NewTask}
            showDelete={tasks.length > 0}
            onDeleteAllTasks={onDeleteAllTasks}
          />
        </div>
      </section>
      {showModal && (
        <TaskModal
          task={task}
          onSave={handleSubmitTask}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default TaskBoard;
