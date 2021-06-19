import ITask from "../../pages/Home/List/Task/types";
import TaskActions from "./TaskActions";

export interface ITaskState {
    Tasks: ITask[],
    addTask?: (newTask: ITask) => void
    editTask?: (editedTask: ITask) => void;
    deleteTask?: (taskId: string) => void;
}

export interface ITaskActions {
    type: TaskActions;
    payload: ITask | string | ITask[];
}
