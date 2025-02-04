// store.ts
import {Derived, Store} from '@tanstack/store';
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

const taskLists = new Derived({
  fn: ({currDepVals}) => {
    const tasks = currDepVals[0].tasks;
    console.log(tasks)
    return Object.values(
      tasks.reduce((acc, task) => {
        acc[task.priority] = acc[task.priority] || { priority: task.priority, tasks: [] };
        acc[task.priority].tasks.push(task);
        return acc;
      }, {} as Record<EPriorityTask, IGroupTaskList>)
    );
  },
  deps: [globalStore] // следит за изменениями в глобальном store
});

// Монтируем, чтобы запустить подписку
taskLists.mount((newTaskLists) => {
  globalStore.setState((prev) => ({
    ...prev,
    taskLists: newTaskLists
  }));
});

// Позже, если нужно отключить
// unmountTaskLists();


export const updateGlobalStore = (params:ITaskStoreState) => {
  console.log('updateGlobalStore', params);
  globalStore.setState(() => params)
}

export default globalStore;
