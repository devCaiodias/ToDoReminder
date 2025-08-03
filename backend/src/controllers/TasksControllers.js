import {tasks} from '../models/Tasks.js'
import User from '../models/User.js'

class TasksControllers {

    static async listTasks(req, res) {
        try {
            const tasksc = await tasks.find({ userId: req.userId });
            
            return res.json(tasksc)
        } catch (err) {
            return res.status(500).json({Error: err.message})
        }
    }

    static async createTasks(req, res) {
      try {
      const { title, description, dueDate, category, status } = req.body;

      // Validação básica
      if (!title || !dueDate || !status) {
        return res.status(400).json({ msg: "Campos obrigatórios estão faltando." });
      }

      // Cria a nova task com o userId vindo do middleware JWT
      const newTask = await tasks.create({
        title,
        description,
        dueDate,
        category,
        status,
        userId: req.userId,
      });

      // Atualiza o usuário e adiciona a task no array de tasks
      await User.findByIdAndUpdate(req.userId, {
        $push: { tasks: newTask._id },
      });

      return res.status(201).json(newTask);
    } catch (err) {
      console.error('Erro ao criar a tarefa:', err);
      return res.status(500).json({ msg: "Erro ao criar a tarefa!", error: err.message });
    }
    }

    static async updateTasks(req, res) {
      try {
        
        const {title, description, category, status } = req.body;
        const tasksId = req.params.id
        
        if(!title || !description || !category || !status) {
          return res.status(400).json({msg: "Campos obrigatorios estao faltando."})
        }
        
        const tasksUpdate = await tasks.findByIdAndUpdate(tasksId, { 
          title,
          description,
          category,
          status
        })
        
        res.json({msg: "Tasks atualizada com sucesso", tasksUpdate})
        
      } catch (error) {
        return res.status(500).json({Err: error})
      }
    }

    static async deleteTasks(req, res) {
      try {
        const { id } = req.params;

        // Busca a task pelo ID
        const taskId = await tasks.findById(id);

        if (!taskId) {
            return res.status(404).json({ msg: 'Tarefa não encontrada' });
        }

        // Verifica se o usuário logado é o dono da task
        if (taskId.userId.toString() !== req.userId) {
            return res.status(403).json({ msg: 'Acesso negado' });
        }

        // Remove a task
        const taskDeletada = await tasks.findByIdAndDelete(id);

        // Remove o ID da task do array de tasks do usuário
        await User.findByIdAndUpdate(req.userId, {
        $pull: { tasks: taskDeletada._id },
      });

        res.json({ msg: 'Tarefa deletada com sucesso' });

    } catch (error) {
        console.error('Erro ao deletar a tarefa:', error);
        res.status(500).json({ msg: 'Erro ao deletar a tarefa', error: error.message });
    }
        
    }
}

export default TasksControllers;