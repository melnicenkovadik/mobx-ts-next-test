"use client";

import TodoButtons from "./todo-buttons";
import {ITodo} from "@/types/todo.types";
import {useState} from "react";
import {useStore} from "@/store";

const TodoItem = ({item}: { item: ITodo }) => {
    const {text, id, done} = item;
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newText, setNewText] = useState(text);
    const {editTodo} = useStore();

    return (
        <li
            className="todo-item"
            key={id}>
            {!isEditing && (<div>{done ? <p className={"todo-item_done"}>{text}</p> : <p>{text}</p>}</div>)}
            {isEditing && (
                <textarea
                    className={"todo-item_edit"}
                    defaultValue={text}
                    onBlur={() => setIsEditing(false)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            setIsEditing(false);
                            editTodo(id, newText);
                        }
                    }}
                    autoFocus
                    onChange={(e) => setNewText(e.target.value)}
                />
            )}
            <TodoButtons
                item={item}
                setIsEditing={setIsEditing}
            />
        </li>
    );
};

export default TodoItem;
