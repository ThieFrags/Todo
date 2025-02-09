import {ITask} from "@shared/interface/todo";
import {EPriorityTask, EProgressTask} from "@shared/enum";
import globalStore, {addTasks} from "@entities/store";

function randomElement<T,>(arr:T[]) {
  const randomIndex = Math.round(Math.random() * (arr.length - 1));
  const result = arr[randomIndex];
  return result;
}

function createRandomItem() {

  const arrRandomTask = ['Пить пиво', 'Чух чух', 'Водочка', 'Лодочка', 'Кровать', 'Кушать']
  const taskItem:ITask = {
    id: crypto.randomUUID(),
    taskName: randomElement(arrRandomTask),
    statusState: randomElement(Object.values(EProgressTask)),
    deadLine: new Date(),
    priority: randomElement(Object.values(EPriorityTask)),
  }

  return taskItem
}



export const getCurrentTaskList = async (): Promise<ITask[]> => {
  const globalTasks = globalStore.state.tasks
  if (globalTasks.length > 0) return Promise.resolve(globalTasks);

  const tasks = Array.from({length: 4}).map(() => createRandomItem());
  addTasks(tasks);
  return Promise.resolve(globalTasks.length > 0 ? globalTasks : tasks);
}

export const saveCurrentTask = async (port:ITask): Promise<ITask> => {
  return Promise.resolve(port);
}

export const createCurrentTask = async (port:Omit<ITask, 'id'>): Promise<ITask> => {
  return Promise.resolve({...port, id: crypto.randomUUID()});
}