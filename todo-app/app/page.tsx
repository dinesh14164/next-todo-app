import AddItem from "@/components/add-item";
import TodoList from "@/components/todo-list";
import { getPosts } from "./lib/actions";
import { Todo } from "@/components/todo-list-item";
export default async function Home() {
  const todoList: Todo[] = await getPosts();
  todoList.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold text-center my-8">Todo App</h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex items-center justify-center">
            <div className="p-8 w-full">
              <div className="flex flex-col w-full">
                <div className="mb-4">
                  <AddItem />
                </div>
                <div>
                  <TodoList todos={todoList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
