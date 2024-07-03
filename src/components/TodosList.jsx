// firebase
import { db } from "../firebase/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

// toast
import toast from "react-hot-toast";

function TodosList({ data }) {
    const deleteTodo = (id) => {
        deleteDoc(doc(db, "todos", id))
            .then(() => {
                toast.success("Deleted")
            })
            .catch((error) => {
                toast.error(error.message)
            });
    };

    const changeStatus = async (id, status) => {
        const data = doc(db, 'todos', id)

        updateDoc(data, {
            completed: !status,
        }).then(() => {
            toast.success("Status changed")
        }).catch((error) => {
            toast.error(error.message)
        })
    }

    return (
        <>
            <h1 className="text-2xl font-semibold">Todo List</h1>
            {data &&
                data.map((todo) => {
                    return (
                        <div className={`${todo.completed ? "opacity-40" : "opacity-100"}`} key={todo.id}>
                            <h3>{todo.title}</h3>
                            <div className="flex gap-5 items-center">
                                <button onClick={() => changeStatus(todo.id, todo.completed)} className="btn btn-accent btn-sm text-white">{todo.completed ? 'uncompleted' : 'completed'}</button>
                                <button onClick={() => deleteTodo(todo.id)} className="btn btn-circle">
                                    <img src="./delete.svg" alt="" className="h-8 w-8" />
                                </button>
                            </div>
                        </div>
                    );
                })}
        </>
    )

}

export default TodosList;