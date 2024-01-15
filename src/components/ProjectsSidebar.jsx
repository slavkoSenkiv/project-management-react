import Button from "./Button";
export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  let buttonClass = `
  w-full 
  text-left 
  px-2 
  py-1 
  rounded-sm 
  my-1 
  `;

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          if (project.id === selectedProjectId) {
            buttonClass += " text-stone-200 bg-stone-800";
          } else {
            buttonClass += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={buttonClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
