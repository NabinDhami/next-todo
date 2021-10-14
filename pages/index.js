import Head from "next/head";
import Todo from "../components/Todo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Todo-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl mb-10">Todo App</h1>
      <Todo />
    </div>
  );
}
