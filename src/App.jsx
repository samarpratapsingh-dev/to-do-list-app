import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import EditModal from "./components/EditModal";
import {
  saveTasksToStorage,
  loadTasksFromStorage,
} from "./utils/localStorageUtils";
import "./styles/App.css";
import "./styles/TaskItem.css";
import "./styles/Responsive.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = loadTasksFromStorage();
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const updateTask = (id, newText) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updated);
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleCloseModal = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={handleEdit}
      />
      {taskToEdit && (
        <EditModal
          task={taskToEdit}
          onUpdate={updateTask}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
