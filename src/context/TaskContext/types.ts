import ITask from "../../pages/Home/List/Task/types";
import TaskActions from "./TaskActions";

export interface ITaskState {
    Tasks: ITask[],
    addTask?: (newTask: ITask) => void
    editTask?: (taskId: ITask) => void;
}

export interface ITaskActions {
    type: TaskActions;
    payload: ITask;
}
