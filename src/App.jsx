import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import ProjectPreview from "./components/ProjectPreview";

function App() {
  const projectsArr = [];
  const [mainPartState, setMainPartState] = useState("no project");

  function handleNewProject() {
    setMainPartState("new project");
  }

  return (
    <div className="flex h-screen">
      <Sidebar 
        projects={projectsArr} 
        addProjectClick={handleNewProject} />

      {mainPartState === "no project" ? (
        <NoProjectSelected 
          addProjectClick={handleNewProject} />
          
      ) : mainPartState === "new project" ? (
        <ProjectPreview
          projectTitle="new project"
          date="1234"
          projectDescription="write here project description"
          taskList={[]}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
