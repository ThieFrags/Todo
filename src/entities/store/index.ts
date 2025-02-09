// store.ts
import {Store} from '@tanstack/store';
import {IGroupTaskList, ITask} from '@shared/interface/todo';
import {EPriorityTask} from "@shared/enum";

// Тип состояния Store
interface ITaskStoreState {
  taskLists: IGroupTaskList[],
  tasks: ITask[],
}

// Начальное состояние Store
const initialState: ITaskStoreState = {
  taskLists: [],
  tasks: [],
};

// Создаем глобальное хранилище
const globalStore = new Store<ITaskStoreState>(initialState);

export const addTasks = (task: ITask | ITask[]): void => {
  globalStore.setState((prev) => {
    const tasks = [...prev.tasks, ...Array.isArray(task) ? task : [task]];

    return {
      ...prev,
      tasks,
      taskLists: Object.values(
        tasks.reduce((acc, task) => {
          acc[task.priority] = acc[task.priority] || {priority: task.priority, tasks: []};
          acc[task.priority].tasks.push(task);
          return acc;
        }, {} as Record<EPriorityTask, IGroupTaskList>)
      )
    }
  })
}

export const updateGlobalStore = (params:ITaskStoreState) => {
  console.log('updateGlobalStore', params);
  globalStore.setState(() => params)
}

export default globalStore;
