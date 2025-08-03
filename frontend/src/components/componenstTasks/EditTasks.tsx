'use client'
import axios from "axios";
import { Button } from "../ui/button";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea"

interface TasksProps {
    task: {
        _id?: string
        title: string
        description: string;
        dueDate: string;
        category: string;
        status: string;
    },
    onTaskUpdated: () => void;
}


export default function EditTasks({ task, onTaskUpdated }: TasksProps) {

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.dueDate.slice(0, 16));
    const [status, setStatus] = useState(task.status);
    const [category, setCategory] = useState(task.category);

    async function handleUpdateTasks() {
        try {
            await axios.put(`http://localhost:8080/tasks/updateTasks/${task._id}`, 
                { title, description, dueDate, status, category }, 
                { withCredentials: true })
            onTaskUpdated();
        } catch (error) {
            console.error("Erro ao atualizar a tarefa", error);
        }
    }
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="link" className='text-[#38b6ff]'>Editar</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="leading-none font-medium">Edit your task</h4>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="description">description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="date">Date Local</Label>
                                <Input
                                    type="datetime-local"
                                    id="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="status">status</Label>
                                <Input
                                    id="status"
                                    placeholder="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="category">category</Label>
                                <Input
                                    id="category"
                                    placeholder="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <Button onClick={handleUpdateTasks}>Salvar</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}