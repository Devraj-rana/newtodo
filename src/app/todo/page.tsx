"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { todo } from "node:test";

function TodoPage() {
  const [todo, setTodo] = useState("");
  <input
   type="text"
    id="todo"
     className="p-2 rounded border border-gray-300 text-black w-64 mb-4" placeholder="Enter todo" 
     autoComplete="off" autoFocus
     onChange={(e) => setTodo(e.target.value)}
   />
  return (
    <main className=" justify-center items-center flex-col h-screen w-screen">
      <div className="flex justify-center items-center h-full">
        <form action="input" className="flex flex-col items-center justify-center h-full">
          <input
           type="text"
            id="todo"
             className="p-2 rounded border border-gray-300 text-black w-64 mb-4" placeholder="Enter todo" 
             autoComplete="off" autoFocus/>
             <ul color="black" className="text-lg p-4 rounded-lg text-black">
                   <li>
                    Go shopping                    
                    </li> 
                    <li>
                    Go library
                    </li>
                    <li>
                    Go market
                    </li>
                    <li>
                    Go to the gym
                    </li>
                    <li>
                    Go to the cinema
                    </li>                
             </ul>
          
          <Button className="bg-blue-600" size="lg">
        ADD
      </Button>
        </form>
        
      </div>
      
    </main>
  );
}
export default TodoPage;
