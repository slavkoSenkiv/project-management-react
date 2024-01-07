import { useState } from "react";

export default function ProjectPreview({
  projectId,
  projectTitle,
  projectDescription,
  taskList,
  date,
  projects,
  onAddProject,
}) {
  
  const projectJson = {
    projectId: projectId,
    projectName: projectTitle,
    description: projectDescription,
    tasks: taskList,
    dateUpdated: date,
  };

  const [projectData, setProjectData] = useState(projectJson);
  const [projectsList, setProjectsList] = useState(projects);

  function handleInputChange(event, parameter) {
    setProjectData((prevObj) => {
      prevObj[parameter] = event.target.value;
      return { ...prevObj };
    });
  }

  function handleSaveProject() {
    setProjectsList((prevProjectsList) => [...prevProjectsList, projectData]);
    onAddProject(projectData);
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md">
      {/* title */}
      <h1 className="text-2xl font-bold mb-4">
        <input
          type="text"
          defaultValue={projectData.projectName}
          onChange={(event) => handleInputChange(event, "projectName")}
          className="border-b-2 focus:outline-none focus:border-blue-500"
        />
      </h1>

      {/* description */}
      <p>
        <input
          type="text"
          defaultValue={projectDescription}
          onChange={(event) => handleInputChange(event, "description")}
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
              defaultValue={task}
              className="flex-1 border-b-2 focus:outline-none focus:border-blue-500"
            />
            <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded">Save
            </button>
          </span>
        ))
      )}

      {/* add new task */}
      <span className="flex items-center mt-4">
        <input
          type="text"
          className="flex-1 border-b-2 focus:outline-none focus:border-blue-500"
        />

        <button className="ml-2 px-3 py-1 bg-green-500 text-white rounded">
          Add New Task
        </button>
      </span>
      
      {/* date, delete, save project */}
      <span className="flex items-center mt-4">
        <p className="text-gray-500 mb-4">Date: {date}</p>

        <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded">
          Delete Project
        </button>

        <button
          onClick={handleSaveProject}
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
        >
          Save Project
        </button>
      </span>
    </div>
  );
}
