import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProjectPreview({
  id,
  projects,
  onDeleteClick,
  onSaveProject,
}) {
  let projectJson;
  if (id === projects.length + 1) {
    projectJson = {
      id: id,
      title: "new blank project",
      description: "write here project description",
      tasks: ["add your tasks below"],
      date: "1234",
    };
  } else {
    projects.map((project) => {
      if (id === project.id) {
        projectJson = {
          id: project.id,
          title: project.title,
          description: project.description,
          tasks: project.tasks,
          date: project.date,
        };
      }
    });
  }

  const [projectData, setProjectData] = useState(projectJson);
  const newTaskRef = useRef();

  function handleInputChange(event, parameter) {
    setProjectData((prevObj) => {
      prevObj[parameter] = event.target.value;
      return { ...prevObj };
    });
  }

  function onSubtaskChange(event, taskIndex) {
    const updatedTasks = [...tasksArr];
    updatedTasks[taskIndex] = event.target.value;
    setTasksArr(updatedTasks);
  }

  function handleRemoveSubtask(taskIndex) {
    setProjectData((prevProject) => {
      const updatedProject = { ...prevProject };
      updatedProject.tasks.splice(taskIndex, 1);
      return updatedProject;
    });
  }

  function handleAddSubtask(inputValue) {
    setProjectData((prevProject) => {
      const deepCopyProject = { ...prevProject };
      deepCopyProject.tasks = [...prevProject.tasks, inputValue.current.value];
      return deepCopyProject;
    });
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* title */}
      <h1 className="text-2xl font-bold mb-4">
        <input
          type="text"
          defaultValue={projectData.title}
          onChange={(event) => handleInputChange(event, "title")}
          className="border-b-2 focus:outline-none focus:border-blue-500"
        />
      </h1>

      {/* description */}
      <p>
        <input
          type="text"
          defaultValue={projectData.description}
          onChange={(event) => handleInputChange(event, "description")}
          className="border-b-2 focus:outline-none focus:border-blue-500"
        />
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">Tasks</h2>
      {projectData.tasks.length === 0 ? (
        <p className="text-gray-500">
          This project does not have any tasks yet
        </p>
      ) : (
        projectData.tasks.map((task, taskIndex) => (
          <span key={uuidv4()} className="flex items-center mb-2">
            <input
              type="text"
              defaultValue={task}
              //onChange={(event) => onSubtaskChange(event, taskIndex)}
              className="flex-1 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => handleRemoveSubtask(taskIndex)}
            >
              X
            </button>
          </span>
        ))
      )}

      {/* add new task */}
      <span className="flex items-center mt-4">
        <input
          type="text"
          ref={newTaskRef}
          className="flex-1 border-b-2 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-2 px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => handleAddSubtask(newTaskRef)}
        >
          Add
        </button>
      </span>

      {/* date, delete, save project */}
      <span className="flex items-center mt-4">
        <p className="text-gray-500 mb-4">Date: {projectData.date}</p>

        <button
          onClick={() => onDeleteClick(projectData)}
          className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete Project
        </button>

        <button
          onClick={() => onSaveProject(projectData)}
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
        >
          Save Project
        </button>
      </span>
    </div>
  );
}
