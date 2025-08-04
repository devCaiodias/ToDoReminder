import axios from "axios";
import { Button } from "../ui/button";

interface TasksProps {
    task: {
        _id?: string
    },
    onTaskDelete: () => void;
}

export default function DeleteTask({task, onTaskDelete}: TasksProps) {

    async function handleDelete() {
        try {
            await axios.delete(`http://localhost:8080/tasks/deleteTasks/${task._id}`,
                { withCredentials: true })
            onTaskDelete();
        } catch (error) {
            console.error("Erro ao deletar a tarefa", error);
        }
    }
    return (
        <>
            <Button onClick={handleDelete} className='rounded-full bg-white text-black hover:bg-[#f1f1f1] p-6'>Delete</Button>
        </>
    )
}