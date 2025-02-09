import {ITask} from "@shared/interface/todo";
import {getCurrentTaskList} from "@entities/slice/to-do";
import {useQuery} from "@tanstack/react-query";

export const useGetTasksListUseCase = () => {
  const execute = async ():Promise<ITask[]> => {
    return getCurrentTaskList();
  }

  return useQuery({
    queryFn: execute, queryKey: ['getTaskList'], // execute при монтировании добавляет данные без Promise в data. Когда хотим взять данные с сервера
  })
}