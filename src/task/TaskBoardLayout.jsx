import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import { getTaskFromLocalStorage } from "../utils/localStorage";

function TaskBoardLayout() {
  const [tasks, setTasks] = useState(getTaskFromLocalStorage);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value.trim().toLowerCase();
    setSearchTerm(searchQuery);
  };

  // it's changing automatically with searchTerm value
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //const [tasks,setTasks]=useState([defaultTask]);
  const vals = { searchTerm, handleSearch };

  return (
    <>
      <Header vals={vals} />

      <div>
        <TaskBoard
          tasks={tasks}
          setTasks={setTasks}
          filteredTasks={filteredTasks}
        />
      </div>

      <Footer />
    </>
  );
}

export default TaskBoardLayout;
