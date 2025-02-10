import {ITask} from "@shared/interface/todo";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCurrentTask} from "@entities/slice/to-do";
import {deleteTask} from "@entities/store";

export const useDeleteTaskUseCase = () => {
  const queryClient = useQueryClient();
  const execute = async (port:ITask):Promise<ITask> => {
    const task = await deleteCurrentTask(port);
    deleteTask(task);

    return task;
  }
  return useMutation({
    mutationFn: execute, mutationKey: ['deleteTask'],
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['getTaskList']});
    },// Одно из свойств отправить данные изменённые пользователем обратно на сервер.
    //подставляет так же в execute.
  })
}