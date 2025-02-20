import {ITask} from "@shared/interface/todo";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {saveCurrentTask} from "@entities/slice/to-do";

export const useSaveTaskUseCase = () => {
  const queryClient = useQueryClient();
  const execute = async (port:ITask):Promise<ITask> => {
    return saveCurrentTask(port);
  }
  return useMutation({
    mutationFn: execute, mutationKey: ['savedTask'],
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['getTaskList']});
    },// Одно из свойств отправить данные изменённые пользователем обратно на сервер.
    //подставляет так же в execute.
  })
}