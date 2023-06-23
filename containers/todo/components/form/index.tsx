import {FC, FormEvent, useState} from "react";
import {useStore} from "@/store";
import {observer} from "mobx-react-lite";

const Form: FC = observer(() => {
    const store = useStore();
    const [message, setMessage] = useState("");

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        store.addTodo({
            text: message,
            done: false,
            id: Date.now().toString(),
        });
        setMessage("");
    };

    return (
        <form
            className="todo-form"
            onSubmit={submitHandler}
        >
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Add your todo here..."
                required
            />
            <button type="submit">Add</button>
        </form>
    );
});

export default Form;
