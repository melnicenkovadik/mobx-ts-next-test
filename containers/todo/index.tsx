import {FC} from "react";
import Todos from "@/containers/todo/components/todos";
import Form from "@/containers/todo/components/form";
import Stats from "@/containers/todo/components/stats";

const TodoContainer: FC = () => {
    return (
        <div className="todos-container">
            <Stats/>
            <Form/>
            <Todos/>
        </div>
    );
};

export default TodoContainer;
