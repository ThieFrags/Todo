import {ITask} from "@shared/interface/todo";
import {useMutation} from "@tanstack/react-query";
import {createCurrentTask} from "@entities/slice/to-do";

export const useCreateTaskUseCase = () => {
  const execute = async (port:Omit<ITask, 'id'>):Promise<ITask> => {
    return createCurrentTask(port);
  }
  return useMutation({
    mutationFn: execute, mutationKey: ['getTaskList'], // Одно из свойств отправить данные изменённые пользователем обратно на сервер.
    //подставляет так же в execute.
  })
}



