"use client";
import { useEffect, useState ,use} from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Todo = {
  id: string;
  text: string;
};

export default function TodoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = use(params)
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      const parsed: Todo[] = JSON.parse(stored);
      const found = parsed.find((t) => t.id === id);
      if (found) setTodo(found);
    }
  }, [id]);

  if (!todo) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
        <h1 className="text-2xl mb-4">Todo not found </h1>
        <Link href="/">
          <Button className="bg-blue-600">Go Back</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white bg-black p-4">
      <h1 className="text-3xl font-bold mb-4">Todo Details</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        {/* <p className="text-lg mb-2">ID: <span className="text-green-400">{todo.id}</span></p> */}
        <p className="text-xl">{todo.text}</p>
      </div>
      <Link href="/to" className="mt-6">
        <Button className="bg-blue-600">Back to List</Button>
      </Link>
    </main>
  );
}
