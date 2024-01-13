import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

export default function App() {
  return (
    <main className="h-screen mt-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  )
}