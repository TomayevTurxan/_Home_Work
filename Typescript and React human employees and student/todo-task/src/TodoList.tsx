import  { useEffect, useState } from "react";
import "./App.css";
import { Checkbox } from "@mui/material";
import { Button} from 'antd'
interface item {
  id: number;
  text: string;
  completed: boolean;
}
const TodoList = () => {
  const [todos, setTodos] = useState<item[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );
  const [input, setInput] = useState<string>("");
  const [editInput, seteditInput] = useState<string>("");
  const [editItemId, seteditItemId] = useState<number | null>(null);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  console.log(input);
  const handleSubmit = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodos([...todos, newTodo]);
    setInput("");
  };
  const handleRemove = (id: number) => {
    const removeItem = todos.filter((todo) => todo.id !== id);
    setTodos(removeItem);
  };

  const handleEdit = (id: number) => {
    seteditItemId(id);
    const editingItem = todos.find((todo) => todo.id === id);
    seteditInput(editingItem?.text || "");
  };
  const handleSave = () => {
    if (editItemId !== null) {
      const editItem = todos.map((todo) =>
        todo.id === editItemId ? { ...todo, text: editInput } : todo
      );
      setTodos(editItem);
      seteditItemId(null);
      setInput("");
    }
  };

  const handleCancelEdit = () => {
    seteditItemId(null);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todoApp">
      <h1>Todo List</h1>
      <ul className="todoUl">
        {todos.map((todo, idx) => (
          <li key={idx}>
            <Checkbox
              onClick={() => handleToggle(todo.id)}
              checked={todo.completed}
              {...label}
            />
            {editItemId === todo.id ? (
              <input
                type="text"
                value={editInput}
                onChange={(e) => seteditInput(e.target.value)}
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            )}
            {editItemId === todo.id ? (
              <>
                <Button  onClick={() => handleSave()} type="primary">Save</Button>
                <Button onClick={() => handleCancelEdit()} danger>Cancel</Button>
              </>
            ) : (
              <button onClick={() => handleEdit(todo.id)} className="edit">
                Edit
              </button>
            )}
            <button onClick={() => handleRemove(todo.id)} className="remove">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="btn">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Add Item"
        />
        <button onClick={handleSubmit} type="button">
          Add item
        </button>
      </div>
    </div>
  );
};

export default TodoList;
