export const getTaskFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

/*
export const getThemeFromLocalStorage = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme;

  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  return prefersLight ? "light" : "dark";
};*/

export const getThemeFromLocalStorage = () => {
  return (
    localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark")
  );
};

/*// Notes for future access
export const savetaskToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const removeTaskFromLocalStorage = (taskId) => {
    const tasks = gettaskFromLocalStorage();
    const updatedTasks = tasks.filter((task) => task.id!== taskId);
    savetaskToLocalStorage(updatedTasks);
}

export const updateTaskInLocalStorage = (updatedTask) => {
    const tasks = gettaskFromLocalStorage();
    const updatedTasks = tasks.map((task) => task.id === updatedTask.id ? updatedTask : task);
    savetaskToLocalStorage(updatedTasks);
}

export const addTaskToLocalStorage = (newTask) => {
    const tasks = gettaskFromLocalStorage();
    savetaskToLocalStorage([...tasks, newTask]);
}

export const toggleTaskFavorite = (taskId) => {
    const tasks = gettaskFromLocalStorage();
    const updatedTasks = tasks.map((task) => task.id === taskId ? {...task, favorite:!task.favorite } : task);
    savetaskToLocalStorage(updatedTasks);
}

export const filterTasksByFavorite = (tasks) => {
    return tasks.filter((task) => task.favorite);
}

export const filterTasksByTitle = (tasks, title) => {
    return tasks.filter((task) => task.title.toLowerCase().includes(title.toLowerCase()));
}

export const filterTasksByDescription = (tasks, description) => {
    return tasks.filter((task) => task.description.toLowerCase().includes(description.toLowerCase()));
}

export const filterTasksByTag = (tasks, tag) => {
    return tasks.filter((task) => task.tags.includes(tag));
}

export const filterTasksByPriority = (tasks, priority) => {
    return tasks.filter((task) => task.priority === priority);
}

export const sortTasksByTitle = (tasks) => {
    return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
}

export const sortTasksByDate = (tasks) => {
    return [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export const sortTasksByPriority = (tasks) => {
    return [...tasks].sort((a, b) => a.priority - b.priority);
}

export const sortTasksByFavorite = (tasks) => {
    return [...tasks].sort((a, b) => b.favorite - a.favorite);
}

export const calculateTasksCompleted = (tasks) => {
    return tasks.filter((task) => task.completed).length;
}

export const calculateTasksNotCompleted = (tasks) => {
    return tasks.filter((task) => !task.completed).length;
}

export const calculateTasksTotal = (tasks) => {
    return tasks.length;
}

export const calculateTasksPercentageCompleted = (tasks) => {
    const totalTasks = calculateTasksTotal(tasks);
    const completedTasks = calculateTasksCompleted(tasks);
    return (completedTasks / totalTasks) * 100;
}

export const calculateTasksAveragePriority = (tasks) => {
    const totalTasks = calculateTasksTotal(tasks);
    const totalPriority = tasks.reduce((acc, task) => acc + task.priority, 0);
    return totalPriority / totalTasks;
}

export const calculateTasksAverageAge = (tasks) => {
    const totalTasks = calculateTasksTotal(tasks);
    const totalAge = tasks.reduce((acc, task) => acc + (new Date().getFullYear() - new Date(task.createdAt).getFullYear()), 0);
    return totalAge / totalTasks;
}*/
