/* eslint-disable react/prop-types */

import { useState } from "react";

function TaskModal(props) {
  const [task, setTask] = useState(props.task)
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    /* //Anothjer working method 
    if (name === "tags") {
      const tags = value.split(",").map((tag) => tag.trim());
      setTask((prevState) => ({ ...prevState, tags })); // key and value both 'tags' so...
    } else {
      setTask((prevState) => ({ ...prevState, [name]: value }));
    }*/

    if (name === "tags") {
      value = value.split(",").map((value) => value.trim());
    }
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    props.onSave(task);
    props.setShowModal(false);
  };

  const validateForm = () => {
    const errors = {};
    if (!task.title) {
      errors.title = "Title is required";
    }
    if (!task.description) {
      errors.description = "Description is required";
    }
    if (!task.tags.length) {
      errors.tags = "At least one tag is required";
    } else if (task.tags.length > 3) {
      errors.tags = "No more than 3 tags are allowed";
    }
    if (!task.priority) {
      errors.priority = "Priority is required";
    }
    return errors;
  };

  return (
    <div
      className="inset-0 fixed w-full min-h-screen bg-black bg-opacity-50 z-[100] flex items-center justify-center"
      onClick={() => props.setShowModal(false)}
    >
      <form
        className="z-50 w-full max-w-2xl mx-10 bg-gray-700 dark:bg-[#262b28] border border-gray-200 rounded-lg p-8 space-y-6 overflow-auto max-h-full"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-bold text-green-300 md:text-2xl">
          আপনার কর্ম তালিকায় নতুন কর্ম যোগ করুন
        </h2>

        <div className="space-y-6 text-white">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md text-gray-700 bg-gray-200 dark:text-white dark:bg-[#121a16] px-3 py-2.5 focus:outline-none"
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] max-h-[220px] w-full rounded-md text-gray-700 bg-gray-200 dark:text-white dark:bg-[#121a16] px-3 py-2.5 focus:outline-none"
              type="text"
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 xl:gap-x-10 space-y-6 md:space-y-0">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md text-gray-700 bg-gray-200 dark:text-white dark:bg-[#121a16] px-3 py-2.5 focus:outline-none"
                type="text"
                id="tags"
                name="tags"
                value={task.tags.join(",")}
                onChange={handleChange}
              ></input>
              {errors.tags && (
                <p className="text-red-500 text-sm">{errors.tags}</p>
              )}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full rounded-md text-gray-700 bg-gray-200 dark:text-white dark:bg-[#121a16] px-3 py-2.5 focus:outline-none"
                type="text"
                id="priority"
                name="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
              {errors.priority && (
                <p className="text-red-500 text-sm">{errors.priority}</p>
              )}
            </div>
          </div>

          <button
            type="button"
            className="bg-slate-500 rounded-lg p-3 w-2/6"
            onClick={() => {
              props.setShowModal(false);
            }}
          >
            Close
          </button>

          <button
            type="submit"
            className="bg-green-500 rounded-lg p-3 w-2/6 mx-6"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskModal;
