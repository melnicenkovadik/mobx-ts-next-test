import {makeAutoObservable} from "mobx";
import {createContext, useContext, FC} from "react";
import {makePersistable} from "mobx-persist-store";

import {ITodo} from "@/types/todo.types";
import toast from "react-hot-toast";

class SimpleTodoStore {
    todos: Array<ITodo> = [];
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
        setTimeout(() => {
            makePersistable(this, {
                name: "SimpleTodoStore",
                properties: ["todos"],
                storage: localStorage,
            });
            this.loading = true;
        }, 1000);
    }

    addTodo = (todo: ITodo) => {
        this.todos.push(todo);
    };

    removeTodo = (id: string) => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    };

    editTodo = (id: string, text: string) => {
        this.todos = this.todos.map((todo) => {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
    };

    toggleDone = (id: string) => {
        this.todos = this.todos.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        });
    };

    get doneTodos() {
        return this.todos.filter((todo) => todo.done);
    }

    get notDoneTodos() {
        return this.todos.filter((todo) => !todo.done);
    }

    get todosCount() {
        return this.todos.length;
    }

    get doneTodosCount() {
        return this.doneTodos.length;
    }

    get notDoneTodosCount() {
        return this.notDoneTodos.length;
    }

    get todosPercent() {
        return this.todosCount ? Math.round(this.doneTodosCount / this.todosCount * 100) : 0;
    }

    get notDoneTodosPercent() {
        return this.todosCount ? Math.round(this.notDoneTodosCount / this.todosCount * 100) : 0;
    }

    get loadingStatus() {
        return this.loading;
    }
}

const StoreContext = createContext<SimpleTodoStore>(new SimpleTodoStore());

const StoreProvider: FC<{ store: SimpleTodoStore, children: JSX.Element }> = ({store, children}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

const useStore = () => {
    return useContext(StoreContext);
};

export {SimpleTodoStore, StoreProvider, useStore};
