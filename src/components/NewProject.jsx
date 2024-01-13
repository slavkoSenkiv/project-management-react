import { useRef } from "react";
import Input from "./Input";

export default function NewProject() {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-red-500">Cancel</button>
        </li>
        <li>
          <button
            className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-green-500"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textArea />
        <Input ref={duedate} label="Due Date" />
      </div>
    </div>
  );
}
