import React, { useEffect, useState } from 'react';
const API = "https://dummyjson.com/todos";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [names, setNames] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Number of items to display per page

    const fetchdata = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.todos) setTodos(data.todos);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchdata(API);
    }, []);

    useEffect(() => {
        const filteredTodos = todos.filter(todo =>
            todo.todo.toLowerCase().includes(names.toLowerCase())
        );
        setFiltered(filteredTodos);
        setCurrentPage(1); // Reset to first page when filtering
    }, [names, todos]);

    // Calculate the current items to display
    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentTodos = (filtered.length > 0 ? filtered : todos).slice(indexOfFirstTodo, indexOfLastTodo);

    // Calculate total pages
    const totalPages = Math.ceil((filtered.length > 0 ? filtered.length : todos.length) / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='container'>
            <div className="text">
                <input
                    type="text"
                    placeholder="Type Todo Name 🤷....."
                    onChange={(e) => setNames(e.target.value)}
                    value={names}
                />
            </div>

            <div>
                <div className='grid'>
                    {currentTodos.map((value) => (
                        <div key={value.id} className='card'>
                            <p>ID: {value.id}</p>
                            <p>Todo: {value.todo}</p>
                            <p>Completed: {value.completed ? 'Yes' : 'No'}</p>
                            <p>UserID: {value.userId}</p>
                        </div>
                    ))}
                </div>
                <div className='pagination'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>⏮️</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage}>⏭️</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;