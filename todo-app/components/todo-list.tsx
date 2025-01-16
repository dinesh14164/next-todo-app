import TodoListItem, { Todo } from "./todo-list-item";

export default function TodoList({ todos }: { todos: Todo[] }) {
    return (
        <div className="flex flex-col space-y-2">
            {todos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
        </div>
    );
}
