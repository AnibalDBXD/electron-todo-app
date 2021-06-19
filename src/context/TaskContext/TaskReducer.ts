import ITask from "../../pages/Home/List/Task/types";
import TaskActions from "./TaskActions";
import { ITaskState, ITaskActions } from "./types";

const TaskReducer = (state: ITaskState, action: ITaskActions): ITaskState => {
  const { payload, type } = action;

  const insertEditedTask = (editedTask: ITask) => {
    const stateTasks = [...state.Tasks];
    const editedTaskIndex = stateTasks.findIndex(({ id }) => id === editedTask.id);

    stateTasks[editedTaskIndex] = editedTask;
    return stateTasks;
  };

  const deleteTask = (deleteTaskId: string) => {
    const stateTasks = [...state.Tasks];
    const newTasks = stateTasks.filter(({ id }) => id !== deleteTaskId);
    return newTasks;
  };

  switch (type) {
    case TaskActions.ADD_TASK:
      return {
        ...state,
        Tasks: [payload, ...state.Tasks] as ITask[],
      };
    case TaskActions.EDIT_TASK:
      return {
        ...state,
        Tasks: insertEditedTask(payload as ITask),
      };
    case TaskActions.DELETE_TASK:
      return {
        ...state,
        Tasks: deleteTask(payload as string),
      };
    default:
      return state;
  }
};

export default TaskReducer;
