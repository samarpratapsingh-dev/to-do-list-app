// (You can use this as a modal or inline editing interface)

import { useState, useEffect } from "react";

function EditModal({ task, onUpdate, onClose }) {
  const [updatedText, setUpdatedText] = useState("");

  useEffect(() => {
    if (task) setUpdatedText(task.text);
  }, [task]);

  const handleUpdate = () => {
    if (updatedText.trim() === "") return;
    onUpdate(task.id, updatedText.trim());
    onClose();
  };

  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Task</h3>
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleUpdate}>Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
