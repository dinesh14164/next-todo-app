import { completePost, deletePost } from "@/app/lib/actions";
import EditTodo from "./edit-todo";

export interface Todo {
    _id: number;
    title: string;
    completed: boolean;
}

interface TodoListItemProps {
    todo: Todo;
}

export default function TodoListItem({ todo }: TodoListItemProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2">
            {
                todo.completed &&
                <div className="pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
            }
            {
                !todo.completed &&
                <div className="pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eded41f5" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            }

            <EditTodo todo={todo} />
            <div className="flex space-x-2">
                <form className="flex items-center space-x-2" action={deletePost}>
                    <input
                        type="text"
                        defaultValue={todo._id}
                        name="id"
                        className="hidden"
                    />
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>

                    </button>
                </form>
            </div>
            {
                !todo.completed &&
                <div className="flex space-x-2">
                    <form className="flex items-center space-x-2" action={completePost}>
                        <input
                            type="text"
                            defaultValue={todo._id}
                            name="id"
                            className="hidden"
                        />
                        <input
                            type="text"
                            name="title"
                            defaultValue={todo.title}
                            className="hidden"
                        />
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Complete
                        </button>
                    </form>
                </div>
            }
        </div>
    );
};
