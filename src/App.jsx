import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const projectsArr = [];
  const [mainPartState, setMainPartState] = useState(true);

  function handleMainPartState () {
    setMainPartState(false)
  }

  return (
    <div className="flex h-screen">
      <Sidebar projects={projectsArr} addProjectClick={handleMainPartState}/>
      {mainPartState ? <NoProjectSelected addProjectClick={handleMainPartState}/> : <ProjectPreview />}
    </div >
  );
}

export default App;
