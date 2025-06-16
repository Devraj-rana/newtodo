import Link from "next/link";

export default function Home() {
  return (
    <main className=" row-start-2 items-top justify-center w-screen h-screen">
      <div className="text-center text-lg  text-blue-400 maxwidth-[500px] p-4, maxheight-[300px]">
        <h1 className="text-4xl font-bold mb-4 border-8 border-blue-400 p-4 rounded-lg bg-white justify-center ">
          TO-DO LIST
        </h1>
        <div className="flex flex-col items-center justify-center h-full">
          <Link
            className="text-4xl font-bold mb-4 border-8 border-blue-400 p-20 rounded-lg bg-white grid place-items-center"
            href="/to"
          >
            ADD TO-DO
          </Link>
        </div>
      </div>
    </main>
  );
}
