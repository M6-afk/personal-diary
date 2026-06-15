import { useState } from "react";

const AddEntryModal = ({ entries, onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !date || !image || !content) {
      alert("Please fill in all fields!");
      return;
    }

    const alreadyExists = entries.some((e) => e.date === date);
    if (alreadyExists) {
      alert("You already have an entry for this day. Come back tomorrow!");
      return;
    }

    onAdd({ title, date, image, content });
    onClose();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">New Diary Entry</h3>
        <input className="input input-bordered w-full mb-3" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="input input-bordered w-full mb-3" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input className="input input-bordered w-full mb-3" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <textarea className="textarea textarea-bordered w-full mb-3" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;