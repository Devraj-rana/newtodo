"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

type Todo = {
  id: string;
  text: string;
};

function TodoPage() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Save to localStorage on todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    if (editId) {
      const updated = todos.map((t) =>
        t.id === editId ? { ...t, text: todo } : t
      );
      setTodos(updated);
      setEditId(null);
    } else {
      const newTodo: Todo = { id: uuidv4(), text: todo };
      setTodos([...todos, newTodo]);
    }

    setTodo("");
  };

  const handleDelete = (id: string): void => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
  };

  const handleEdit = (id: string): void => {
    const target = todos.find((t) => t.id === id);
    if (!target) return;
    setTodo(target.text);
    setEditId(id);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen p-4 gap-8 bg-black">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <label htmlFor="todo" className="text-lg p-4 rounded-lg bg-yellow-500 border-8 border-green-400 text-black">
          {editId !== null ? "Edit todo:" : "Add a new todo:"}
        </label>
        <input
          type="text"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="p-2 rounded border border-gray-300 text-white w-64 bg-transparent"
          placeholder="Enter todo"
        />
        <Button className="bg-blue-600" size="lg" type="submit">
          {editId !== null ? "Update" : "Add"}
        </Button>
      </form>

      <ul className="text-white w-96 space-y-2">
        <AnimatePresence>
          {todos.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800 p-3 rounded flex justify-between items-center"
            >
              <span>{item.text}</span>
              <div className="space-x-2">
                <Link href={`/to/${item.id}`}>
                  <Button className="bg-green-500">View</Button>
                </Link>
                <Button onClick={() => handleEdit(item.id)} className="bg-yellow-500 text-black hover:bg-yellow-600">
                  Edit
                </Button>
                <Button onClick={() => handleDelete(item.id)} className="bg-red-600 hover:bg-red-700 text-white">
                  Delete
                </Button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </main>
  );
}

export default TodoPage;
