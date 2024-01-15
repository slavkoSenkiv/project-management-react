import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel}) {
  const modalRef = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okey">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like you provided invalid input</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-red-500"
            onClick={onCancel}>
              Cancel
            </button>
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
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
