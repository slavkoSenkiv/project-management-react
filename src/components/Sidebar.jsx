import AddProjectButton from "./AddProjectButton";

export default function Sidebar({ projects, onProjectClick, addProjectClick }) {
  return (
    <div className="bg-gray-800 text-white p-10 w-1/5 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Your Projects</h1>

      {projects.length > 0 ? (
        projects.map((project) => (
          <button
            key={project.projectId}
            onClick={() => onProjectClick(project)}
            className="block w-full text-left py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {project.projectName}
          </button>
        ))
      ) : (
        <p>No projects</p>
      )}

      <AddProjectButton addProject={addProjectClick} />
    </div>
  );
}
