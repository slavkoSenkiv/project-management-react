import { useState } from "react";

export default function ProjectPreview({
  projectTitle,
  date,
  projectDescription,
  taskList,
}) {
  const projectJson = {
    projectName: projectTitle,
    dateUpdated: date,
    description: projectDescription,
    tasks: taskList,
  };

  const [projectData, setProjectData] = useState(projectJson);

  function handleInputChange(event, parameter) {
    setProjectData((prevObj) => {
      prevObj[parameter] = event.target.value;
      return { ...prevObj };
    });
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">
        <input
          type="text"
          defaultValue={projectData.projectName}
          onChange={(event) => handleInputChange(event, "projectName")}
          className="border-b-2 focus:outline-none focus:border-blue-500"
        />
      </h1>

      <span className="flex items-center mt-4">
        <p className="text-gray-500 mb-4">Date: {date}</p>
        <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded">
          Delete Project
        </button>
        <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded">
          Save Project{" "}
        </button>
      </span>

      <p>
        <input
          type="text"
          defaultValue={projectDescription}
          className="border-b-2 focus:outline-none focus:border-blue-500"
        />
      </p>
      <h2 className="text-xl font-bold mt-6 mb-4">Tasks</h2>

      {taskList.length === 0 ? (
        <p className="text-gray-500">
          This project does not have any tasks yet
        </p>
      ) : (
        taskList.map((task) => (
          <span key={task} className="flex items-center mb-2">
            <input
              type="text"
              defaultValue={task.description}
              className="flex-1 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded">
              {editingTask ? "Save" : "Delete"}
            </button>
          </span>
        ))
      )}

      <span className="flex items-center mt-4">
        <input
          type="text"
          className="flex-1 border-b-2 focus:outline-none focus:border-blue-500"
        />

        <button className="ml-2 px-3 py-1 bg-green-500 text-white rounded">
          Add New Task
        </button>
      </span>
    </div>
  );
}
