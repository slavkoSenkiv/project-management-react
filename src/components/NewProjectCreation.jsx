export default function ProjectPreview({projectTitle, date, projectDescription, taskList}) {
  return (
    <div>
      <h1><input type="text" defaultValue={projectTitle}/></h1>
      <p>Delete</p>
      <p>{date}</p>
      <p><input type="text" defaultValue={projectDescription}/></p>
      <h2>Tasks</h2>
      {taskList.map((task) =>{
        <span key={task}>
          <input type="text" defaultValue={task.description}/>
          <button>{editingTask ? "Save" : "Delete"}</button>
        </span>
      })}
      <span key={task}>
        <input type="text"/>
        <button>Add New Task</button>
      </span>
      {taskList.length === 0 && <p>This project does not have any tasks yet</p>}

    </div>
  )
}