import {FC} from "react";
import {useStore} from "@/store";
import {observer} from "mobx-react-lite";
import {ITodo} from "@/types/todo.types";

const TodoButtons: FC<{ item: ITodo, setIsEditing: Function }>
    = observer(({item, setIsEditing}) => {
    const {text, id, done} = item;
    const store = useStore();
    const {removeTodo, editTodo, toggleDone} = store;

    const removeTodoHandler = (id: string) => {
        removeTodo(id);
    };
    const editTodoHandler = () => {
        setIsEditing((prev:boolean)=>!prev);
    };
    const toggleDoneHandler = (id: string) => {
        toggleDone(id);
    };

    return (
        <div className="todo-buttons">
            <button onClick={() => removeTodoHandler(id)}>
                <span className="material-icons">🗑️</span>
            </button>
            <button onClick={editTodoHandler}>
                <span className="material-icons">✏️</span>
            </button>
            <button onClick={() => toggleDoneHandler(id)}>
                <span className="material-icons">{!done ? "✅" : "📝"}</span>
            </button>
        </div>
    );
});

export default TodoButtons;
