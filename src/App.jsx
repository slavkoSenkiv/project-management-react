import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import ProjectPreview from "./components/ProjectPreview";

function App() {
  const defProjectsCollection = [
    {
      id: 1,
      title: "project 1",
      description: "description for project 1",
      tasks: ["task 1a", "task 1b", "task 1c"],
      date: "1111",
    },
    {
      id: 2,
      title: "project 2",
      description: "description for project 2",
      tasks: ["task 2a", "task 2b", "task 2c"],
      date: "2222",
    },
  ];

  const [projectsArr, setProjectsArr] = useState(defProjectsCollection);
  const [mainPartState, setMainPartState] = useState('no-project-selected');

  function handleNewProject() {
    setMainPartState('blank-project');
  }

  function handleLoadProject(existingProject) {
    setMainPartState(existingProject.id);
  }

  function handleUpdateExistingProject(updatedProject) {
    setProjectsArr((prevProjectsArr) => {
      return prevProjectsArr.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      );
    });
    setMainPartState('no-project-selected');
  }

  function handleSaveNewProject(newProject) {
    newProject.id = projectsArr.length + 1;
    setProjectsArr((prevProjectsArr) => [...prevProjectsArr, newProject]);
    setMainPartState('no-project-selected');
  }

  function handleDeleteProject(projectToDelete) {
    setProjectsArr((prevProjectsArr) => {
      const index = prevProjectsArr.findIndex(
        (project) => project.id === projectToDelete.id
      );
      if (index !== -1) {
        prevProjectsArr.splice(index, 1);
      }
      return [...prevProjectsArr];
    });
    setMainPartState(-1);
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        projects={projectsArr}
        onProjectClick={handleLoadProject}
        addProjectClick={handleNewProject}
      />

      {mainPartState === 'no-project-selected' ? (
        <NoProjectSelected addProjectClick={handleNewProject} />
      ) : mainPartState === 'blank-project' ? (
        <ProjectPreview
          id={projectsArr.length + 1}
          projects={projectsArr}
          onSaveProject={handleSaveNewProject}
          onDeleteClick={handleDeleteProject}
        />
      ) : (
        projectsArr.map((project, index) => {
          if (mainPartState === project.id) {
            return (
              <ProjectPreview
                key={index}
                id={project.id}
                projects={projectsArr}
                onSaveProject={handleUpdateExistingProject}
                onDeleteClick={handleDeleteProject}
              />
            );
          }
          {
            mainPartState !== -1 && mainPartState !== 0 && (
              <p key="no-project-found">No project found</p>
            );
          }
        })
      )}
    </div>
  );
}

export default App;
