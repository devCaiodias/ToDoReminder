import axios from "axios";
import { Button } from "../ui/button";

import Swal from 'sweetalert2'

interface TasksProps {
    task: {
        _id?: string
    },
    onTaskDelete: () => void;
}

export default function DeleteTask({ task, onTaskDelete }: TasksProps) {

    async function handleDelete() {
        try {
            await axios.delete(`https://todoreminder-3hsg.onrender.com/tasks/deleteTasks/${task._id}`,
                { withCredentials: true })
            onTaskDelete();
            Swal.fire({
                title: "Tasks Deleted",
                icon: "success",
                timer: 1500,
                draggable: true
            });
        } catch (error) {
            Swal.fire({
                title: "Erro ao deletar a tarefa",
                icon: "error",
                timer: 1500,
                draggable: true
            });
        }
    }
    return (
        <>
            <Button onClick={handleDelete} className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>Delete</Button>
        </>
    )
}