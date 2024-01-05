import AddProjectButton from "./AddProjectButton";

export default function Sidebar({ projects }) {
  return (
    <div className="bg-gray-800 text-white p-4 w-64 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Your Projects</h1>

      {projects.length > 0 ? (
        projects.map((project) => (
          <button
            key={project.id}
            className="block w-full text-left py-2 px-4 mb-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {project.name}
          </button>
        ))
      ) : (
        <p>No projects</p>
      )}

      <AddProjectButton />
    </div>
  );
}
