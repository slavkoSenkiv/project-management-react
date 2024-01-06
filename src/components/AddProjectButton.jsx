export default function AddProjectButton( {addProject}) {
  return (
    <button 
      onClick={addProject}
       className="inline-block w-120 text-left py-2 px-4 mt-4 rounded-lg bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-green-600 ">
        + Add Project
      </button>
  )
}