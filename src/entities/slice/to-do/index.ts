import {ITask} from "@shared/interface/todo";
import {EPriorityTask, EProgressTask} from "@shared/enum";

function randomElement<T,>(arr:T[]) {
  const randomIndex = Math.round(Math.random() * (arr.length - 1));
  const result = arr[randomIndex];
  return result;
}

function createRandomItem() {

  const arrRandomTask = ['Пить пиво', 'Чух чух', 'Водочка', 'Лодочка', 'Кровать', 'Кушать']
  const arrRandomdeadLine = ['25','11','4','23','9','27']
  const taskItem:ITask = {
    id: crypto.randomUUID(),
    taskName: randomElement(arrRandomTask),
    statusState: randomElement(Object.values(EProgressTask)),
    deadLine: randomElement(arrRandomdeadLine),
    priority: randomElement(Object.values(EPriorityTask)),
  }

  return taskItem
}

const tasks = Array.from({length: 4}).map(() => createRandomItem());

// const groupedTasks: IGroupTaskList[] = Object.values(
//   tasks.reduce((acc, task) => {
//     acc[task.priority] = acc[task.priority] || { priority: task.priority, tasks: [] };
//     acc[task.priority].tasks.push(task);
//     return acc;
//   }, {} as Record<EPriorityTask, IGroupTaskList>)
// );

export const getCurrentTaskList = async (): Promise<ITask[]> => {
  return Promise.resolve(tasks);
}

export const saveCurrentTask = async (port:ITask): Promise<ITask> => {
  return Promise.resolve(port);
}

export const createCurrentTask = async (port:Omit<ITask, 'id'>): Promise<ITask> => {
  return Promise.resolve({...port, id: crypto.randomUUID()});
}