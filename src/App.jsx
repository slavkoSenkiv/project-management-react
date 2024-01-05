import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const projectsArr = [];

  return (
    <>
      <Sidebar projects={projectsArr}/>
      <NoProjectSelected />
    </>
  );
}

export default App;
