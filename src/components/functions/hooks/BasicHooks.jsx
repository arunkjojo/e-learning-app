import React, { useState, useEffect } from 'react'

const BasicHooks = () => {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then(record => {
                    setState({
                        data: record,
                        isLoading: false
                    })
                });
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    if (state.isLoading) {
        return <h1>Loading...</h1>;
    }
    return <>
        <h1>State and Effect Hooks</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {state.data.map((record, index) => (
                    <tr key={index}>
                        <th>#{record.id}</th>
                        <th>{record.userId}</th>
                        <th>{record.title}</th>
                        <th>{record.body}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
export default BasicHooks;