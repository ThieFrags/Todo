import {ITask} from "@shared/interface/todo";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCurrentTask} from "@entities/slice/to-do";
import {addTasks} from "@entities/store";

export const useCreateTaskUseCase = () => {
  const queryClient = useQueryClient();
  const execute = async (port:Omit<ITask, 'id'>):Promise<ITask> => {
    const task = await createCurrentTask(port);
    addTasks(task)

    return task;
  }
  return useMutation({
    mutationFn: execute, mutationKey: ['createTask'],
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['getTaskList']});
    },
  })
}



