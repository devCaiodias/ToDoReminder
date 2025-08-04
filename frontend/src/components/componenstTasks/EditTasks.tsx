'use client'
import axios from "axios";
import { Button } from "../ui/button";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Swal from "sweetalert2";

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
            Swal.fire({
                title: "Tasks Updated",
                icon: "success",
                timer: 1500,
                draggable: true
            });
        } catch (error) {
            Swal.fire({
                title: "Erro ao atualizar a tarefa",
                icon: "error",
                timer: 1500,
                draggable: true
            });
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
                                <Select value={status} onValueChange={setStatus}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="pending">pending</SelectItem>
                                            <SelectItem value="completed">completed</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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