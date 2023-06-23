import React from "react";
import {useStore} from "@/store";
import {observer} from "mobx-react-lite";

const Stats = observer(() => {
    const store = useStore();
    const {
        todosCount,
        doneTodosCount,
        notDoneTodosCount,
        todosPercent,
        notDoneTodosPercent,
    } = store;

    return (
        <div className="stats">
            <p>
                {todosCount} all
            </p>
            <p>
                <span>{doneTodosCount}</span> done <span>({todosPercent}%)</span>
            </p>
            <p>
                <span>{notDoneTodosCount}</span> not done <span>({notDoneTodosPercent}%)</span>
            </p>
        </div>
    );

});

export default Stats;
