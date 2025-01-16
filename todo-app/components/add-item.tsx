import { createPost } from '@/app/lib/actions';

export default function AddItem() {

    return (
        <form className="flex items-center space-x-2" action={createPost}>
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
                Add
            </button>
        </form>
    );
};
