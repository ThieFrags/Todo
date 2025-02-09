// store.ts
import {Store} from '@tanstack/store';
import {IGroupTaskList, ITask} from '@shared/interface/todo';
import {EPriorityTask} from "@shared/enum";

const getTasklistByTasks = (tasks: ITask[]) => Object.values(
  tasks.reduce((acc, task) => {
    acc[task.priority] = acc[task.priority] || {priority: task.priority, tasks: []};
    acc[task.priority].tasks.push(task);
    return acc;
  }, {} as Record<EPriorityTask, IGroupTaskList>)
)


// Тип состояния Store
interface ITaskStoreState {
  taskLists: IGroupTaskList[],
  tasks: ITask[],
}

// Начальное состояние Store
const initialState: ITaskStoreState = {
  taskLists: getTasklistByTasks(JSON.parse(localStorage.getItem('tasks') || '[]')),
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

// Создаем глобальное хранилище
const globalStore = new Store<ITaskStoreState>(initialState);

export const addTasks = (task: ITask | ITask[]): void => {
  globalStore.setState((prev) => {
    const tasks = [...prev.tasks, ...Array.isArray(task) ? task : [task]];
    localStorage.setItem('tasks', JSON.stringify(tasks));

    return {
      ...prev,
      tasks,
      taskLists: getTasklistByTasks(tasks),
    }
  })
}

export const updateGlobalStore = (params:ITaskStoreState) => {
  console.log('updateGlobalStore', params);
  globalStore.setState(() => params)
}

export default globalStore;
