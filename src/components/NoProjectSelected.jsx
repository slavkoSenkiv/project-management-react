import AddProjectButton from "./AddProjectButton";
import tabImage from "../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={tabImage} alt="Project Image" className="mb-4 w-20 h-20" />
      <h1 className="text-2xl font-bold mb-2">No Projects Selected</h1>
      <p className="text-gray-600 mb-4">Select a project or get started with a new one</p>
      <AddProjectButton />
    </div>
  );
}
