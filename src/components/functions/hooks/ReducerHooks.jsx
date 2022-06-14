import React, { useReducer } from 'react'

const initialTodos = [
    {
        id: 1,
        title: "Functional Hooks",
        complete: true,
    },
    {
        id: 2,
        title: "Custom Hooks",
        complete: true,
    },
    {
        id: 3,
        title: "Refs",
        complete: false,
    },
    {
        id: 4,
        title: "Render Props",
        complete: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const ReducerHooks = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            <h2>Todo List</h2>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.complete 
                            ? <s style={{color:'red'}}>{todo.title}</s>
                            : todo.title
                        }
                    </h3>
                </div>
            ))}
        </>
    );
}

export default ReducerHooks