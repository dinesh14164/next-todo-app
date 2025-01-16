'use client';

import { editPost } from "@/app/lib/actions";
import { useState } from "react";

interface Todo {
    id: number;
    title: string;
}

export default function EditTodo({ todo }: { todo: Todo }) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="flex items-center justify-between bg-white w-full border-r border-gray-200">
            {
                isEditing &&

                <form className="flex items-center space-x-2" action={editPost} onSubmit={() => setIsEditing(false)}>
                    <input
                        type="text"
                        defaultValue={todo.id}
                        name="id"
                        className="hidden"
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Add new item"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        update
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="py-2 px-2 focus:ring-2 focus:ring-blue-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </form>
            }
            {
                !isEditing &&
                <div className="flex items-center justify-between w-full">
                    <span className="text-lg">{todo.title}</span>
                    <div className="flex space-x-2">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => setIsEditing(isEditing => !isEditing)}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}