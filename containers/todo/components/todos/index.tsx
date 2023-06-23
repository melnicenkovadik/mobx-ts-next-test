import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store";
import TodoItem from "@/containers/todo/components/todo-item";
import  {ThreeDots} from "react-loader-spinner";

const Todos: FC = observer(() => {
    const store = useStore();
    const {todos, loadingStatus} = store;
    if (!loadingStatus) return (
        <ThreeDots/>
    );
    if (todos.length === 0) return (<h2 className="no-data">There are no todos</h2>);
    console.log("render todos", todos);
    return (
        <div>
            <ul className="todo-list">
                {todos.map((item) => (
                    <TodoItem key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
});

export default Todos;
